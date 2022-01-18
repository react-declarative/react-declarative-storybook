export const sleep = (timeout?: number) => {
    return new Promise<void>((res) => {
        setTimeout(() => res(), timeout ? timeout : 1e3);
    });
};
