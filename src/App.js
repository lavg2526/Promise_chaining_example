let name = "Lavanya";
const function1 = async (str) => {
  console.log(str);
  return await str;
};
const function2 = async (str1) => {
  let secdata = (await str1) + " " + "Gop";
  console.log("Secdata", secdata);
  return secdata;
};
const function3 = async (str2) => {
  let thirddata = (await str2) + "al";
  console.log("thirddata", thirddata);
  return thirddata;
};
function1(name).then((data) => {
  function2(data)
    .then((data1) => {
      function3(data1).then((data2) => {
        console.log(data2);
      });
    })
    .catch((err) => {
      console.log(Invalid);
    });
});
