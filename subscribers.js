function sendMail(){
  var params={
    name:document.getElementById("name").value,
    message:document.getElementById("messages").value
  };
  const serviceId="service_9ofrzmi";
  const templeteId="template_cutobfc";

  emailjs
  .send(serviceId,templeteId,params)
  .then((res)=>{
    document.getElementById("name").value="";
    // document.getElementById("message").value="";
    console.log(res);

    // alert("message send");
  })
  .catch((err)=>console.log(err));
alert(err);
}
