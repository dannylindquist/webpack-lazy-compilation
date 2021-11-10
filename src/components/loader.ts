// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const loadComponent = async () => {
  return (await import("./lazyComp")).LazyComponent;
};
const cool = "YAY!";

const loader = {
  load: loadComponent,
};

export { loader, cool };

// if (module.hot) {
//   module.hot.accept("./lazyComp");
// }
