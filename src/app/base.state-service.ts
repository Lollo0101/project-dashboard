import { OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export const GLOBAL_STATE: { [index: string]: { state?: any } } = {};
export type Exactly<T, U> = T & Record<Exclude<keyof U, keyof T>, never>;

@Injectable()
export abstract class BaseStateService<TState> implements OnDestroy {
  // DevTools
  private static devtoolsExtension: any;
  private static devToolsExtensionConnection: ReduxDevtoolsExtensionConnection;
  private devToolsEnabled = false;

  private state$!: BehaviorSubject<Readonly<TState>>;
  private instanceName!: string;

  protected abstract get initalState(): TState;

  protected destroyed$ = new Subject<void>();

  protected constructor() {
    this.initialize();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();

    if (this.devToolsEnabled) {
      delete GLOBAL_STATE[this.instanceName];
    }
  }

  public dispatchReset(): void {
    this.resetState();
  }

  protected updateState<T extends Exactly<TState, T>>(func: (state: TState) => T, action: string): void {
    const updatedState = func(this.stateSnapshot);
    this.state$.next(updatedState);

    if (this.devToolsEnabled) {
      GLOBAL_STATE[this.instanceName] = updatedState;
      BaseStateService.devToolsExtensionConnection?.send(action, GLOBAL_STATE);
    }
  }

  protected select<TResult>(func: (state: TState) => TResult): Observable<Readonly<TResult>> {
    return this.state$.pipe(
      map(func),
      distinctUntilChanged(),
    );
  }

  protected selectInstant<TResult>(func: (state: TState) => TResult): Readonly<TResult> {
    return func(this.stateSnapshot);
  }

  public selectFullState$(): Observable<Readonly<TState>> {
    return this.state$.asObservable();
  }

  protected get stateSnapshot(): Readonly<TState> {
    return this.state$.value!;
  }

  // Utils

  private initialize(): void {
    // Initialize store
    this.state$ = new BehaviorSubject(this.initalState);

    // DevTools
    if (this.devToolsEnabled) {
      const now = new Date();
      this.instanceName = `${this.constructor.name}`; // ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}_

      const config: ReduxDevtoolsExtensionConfig = {};
      BaseStateService.devtoolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__

      if (BaseStateService.devtoolsExtension && !BaseStateService.devToolsExtensionConnection) {
        BaseStateService.devToolsExtensionConnection = BaseStateService.devtoolsExtension.connect(config);
        BaseStateService.devToolsExtensionConnection.init(config);
      }
    }
  }

  private resetState(): void {
    this.updateState(_ => this.initalState as Exactly<TState, TState>, 'RESET STATE');
  }
}

interface ReduxDevtoolsExtensionConfig {
  name?: string;
  features?: object | boolean;
  latency?: number;
  maxAge?: number;
  trace?: boolean;
  traceLimit?: number;
  serialize?: boolean | object;
  actionSanitizer?: any;
  stateSanitizer?: any;
  routerPropertyName?: string;
  reactRouterHistory?: any;
  router?: any;
  ngZone?: any;
}

interface ReduxDevtoolsExtensionConnection {
  subscribe(listener: (change: any) => void): void;
  unsubscribe(): void;
  send(action: any, state: any): void;
  init(state?: any): void;
  error(anyErr: any): void;
}
