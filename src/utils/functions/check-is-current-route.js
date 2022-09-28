const checkIsCurrentRoute = (route, link) => {
  if (route.startsWith(link)) return true;
  else return false;
};

export default checkIsCurrentRoute;
