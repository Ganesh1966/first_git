async function getlangs() {
    //console.log("Hello123")
    let res = await fetch(`https://libretranslate.de/languages`);
    let data = await res.json();
    //console.log("data1:",data)
   appenddata(data);
  }
  getlangs();
  
  function appenddata(d) {
    let maindiv = document.getElementById(`Langs`);
    d.forEach((el) => {
      let opt = document.createElement(`option`);
      opt.value = el.code;
      opt.textContent = el.name;
      maindiv.append(opt);
    });
  }
  
  function getTheValu() {
    let val = document.getElementById(`Langs`).value;
    console.log("1");
    return val;
  }
  function getInput() {
    let log = document.getElementById("Box");
   //console.log("value1:",log)
    return log.value;
    
  }
  getInput();
  
  async function translate() {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: getInput(),
        source: "en",
        target: getTheValu(),
      }),
      headers: { "Content-Type": "application/json" },
    });
  //console.log("123")
    let data = await res.json();
    //console.log("data456:",data)
    let { translatedText } = data;
    appendres(translatedText);
  }
  
  function getthevalu() {
    //let log = document.getElementById("Box");
console.log("2")

    translate();
  }
  
  function appendres(data) {
     // console.log(data)
    let trgt = document.getElementById(`Box2`);
    //console.log("repeat")
    trgt.value = data;
  }