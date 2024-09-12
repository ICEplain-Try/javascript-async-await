//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
getJohnProfile()
  .then((profile) => {
    console.log(profile); // จะไม่ถูกเรียกใช้ในกรณีนี้
  })
  .catch((error) => {
    console.log(error);
  });