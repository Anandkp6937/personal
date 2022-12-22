function sendMail(){
  var params={
    name:document.getElementById("name").value
  };
  const serviceId="service_9ofrzmi";
  const templeteId="template_cutobfc";

  emailjs
  .send(serviceId,templeteId,params)
  .then((res)=>{
    document.getElementById("name").value="";
    console.log(res);
    // alert("message send");
  })
  .catch((err)=>console.log(err));

}
