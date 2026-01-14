(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("p") === "true") {
    window.location.replace("https://photos.app.goo.gl/3mpxk8bg396jnq4N6");
  }
})();