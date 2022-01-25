export const logger = (store: any) => (next: any) => (action: any) => {

    const previosState = store.getState();

    console.log(previosState);

    let result = next(action);

    const nextState = store.getState();

    console.log(nextState);

    return result;
}