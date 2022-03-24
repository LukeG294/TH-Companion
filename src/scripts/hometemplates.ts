import { find, runtime} from "webextension-polyfill";
import BrainlyApi from "./BrainlyApi"
let noanswer = runtime.getURL("resources/Compositions/Brainly_Plus_Jump.svg")
console.log(noanswer)
let answer_template = /*html*/ `
<div class="answer"></div>
`
export function ticket(){
  
  return(/*html*/`
  <div class = "modal_back"><div class = "modal">
  <h1 class="sg-text-bit--gray-secondary sg-headline sg-headline--xlarge sg-headline--extra-bold" style = "color:#323c45; margin-bottom:8px;">Question Content</h1>
    <div class = "modal_close"><div class="sg-toplayer__close" role="button" tabindex="0"><div class="sg-icon sg-icon--icon-gray-50 sg-icon--x24"><svg class="sg-icon__svg" role="img" aria-labelledby="title-close-zvtc08" focusable="false"><title id="title-close-zvtc08">close</title><use xlink:href="#icon-close" aria-hidden="true"></use></svg></div></div></div>
  
    <div class = "preview-content">
  
      <div class="sg-spinner-container">
        <div class="sg-spinner-container__overlay">
          <div class="sg-spinner sg-spinner--gray-900 sg-spinner--small"></div>
        </div>
      </div>
      <div class = "content-item question">
        <div class = "report">
        <div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-report_flag"></use></svg></div>
        <div class="text-rep">
          <div class="user-info">
            <div class="username sg-text sg-text--gray sg-text--bold sg-text--small rightdot">LoremIpsum</div>
            <div class="rank sg-text sg-text--small">Helping Hand</div>
          </div>
          <div class="report-info">
            <div class="sg-text">Reason</div>
          </div>
        </div>
        </div>
        <div class="qdata">
          <div class="user-info">
            <div class="pfp"><div class="sg-avatar"><div class="sg-avatar__image sg-avatar__image--icon"><div class="sg-icon sg-icon--gray-light sg-icon--x32 sg-avatar__icon"><svg class="sg-icon__svg"><use xlink:href="#icon-profile"></use></svg></div></div></div></div>
            <div class="qdata-info-txt">
              <div class="text-user">
                <div class="username sg-text sg-text--gray sg-text--bold sg-text--small rightdot">JohnDoe</div>
                <div class="rank sg-text sg-text--small">Ambitious</div>
              </div>
              <div class="text-subj">
                <div class = "sg-text sg-text--xsmall rightdot">Subject</div>
                <div class = "sg-text sg-text--xsmall">Middle School</div>
              </div>
            </div>
          </div>
          <div class="q-content sg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="q-attachment">
            <div class="attachment-tools">
              <button class="newtab"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-open_in_new_tab"></use></svg></div></button>
              <button class="rotate"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-rotate"></use></svg></div></button>
            </div>
          </div>
          <div class="attach-list"></div>
          <div class="actions">
            <button class="qdel one">1</button>
            <button class="qdel two">2</button>
            <button class="qdel three">3</button>
            <div class="delete"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-trash"></use></svg></div></div>
          </div>
        </div>
      </div>
  
      <div class = "answers">
        <img src = '${noanswer}'>
      </div>
    </div>
  `)
}
export async function insertdata_ticket(id){
  let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, {
    method: "POST",
    headers:{
      "accept":'application/json'
    },
    body: (`{
      "model_type_id":1,
      "model_id":${id},
      "schema":"moderation.content.get"
    }`)
  }).then(data => data.json())
  let d_reference = await fetch('https://brainly.com/api/28/api_config/desktop_view', {method: "GET"}).then(data => data.json());
  document.querySelector(".sg-spinner-container").classList.add("remove");
  console.log(d_reference);
  try{
    let q_data = res.data.task;
    let a_data = res.data.responses;
    let q_elem = document.querySelector(".qdata");
    console.log(res);
    document.querySelector(".q-content").innerHTML = q_data.content;
    document.querySelector(".text-subj > div:nth-child(2)").innerHTML = d_reference.data.grades.find(({id}) => id === q_data.grade_id).name;
    document.querySelector(".text-subj > div:nth-child(1)").innerHTML = d_reference.data.subjects.find(({id}) => id === q_data.subject_id).name;
    let asker = res.users_data.find(({id}) => id === q_data.user.id);
    if(q_data.report){
      let report_elem = document.querySelector(".report")
      let reporter = res.users_data.find(({id}) => id === q_data.report.user.id)
      report_elem.querySelector(".report-info div").innerHTML = q_data.report?.abuse.name; 
      document.querySelector(".content-item.question").classList.add("reported");

      report_elem.querySelector(".username").innerHTML = reporter.nick;
      report_elem.querySelector(".rank").innerHTML = reporter.ranks.names[0];
      report_elem.querySelector(".rank").setAttribute("style", `color: ${reporter.ranks.color}`)
    }
    if(asker.avatar !== null){
      q_elem.querySelector(".pfp").innerHTML = /*html*/`
        <img src=${asker.avatar[64]} alt="">
        `
    }
    q_elem.querySelector(".text-user .username").innerHTML = asker.nick;
    q_elem.querySelector(".text-user .rank").innerHTML = asker.ranks.names[0];
    q_elem.querySelector(".text-user .rank").setAttribute("style", `color: ${asker.ranks.color}`);
    if(q_data.attachments.length !== 0){
      let rotation = 0;
      q_elem.querySelector(".rotate").addEventListener("click", function(){
        q_elem.querySelector(".q-attachment > img").setAttribute("style", `transform: rotate(${rotation+90}deg)`)
        rotation += 90;
      });
      q_elem.querySelector(".newtab").addEventListener("click", function(){
        window.open(q_elem.querySelector(".q-attachment > img").getAttribute("src"),"_blank");
      });

      if(q_data.attachments[0].extension === "png" || q_data.attachments[0].extension === "jpg" || q_data.attachments[0].extension === "jpeg"){
        q_elem.querySelector(".q-attachment").classList.add("show");
      q_elem.querySelector(".q-attachment").insertAdjacentHTML("beforeend",/*html*/`
      <img src=${JSON.stringify(q_data.attachments[0].full)}>
      `)
      if(q_data.attachments.length > 1){
        for(let i = 0; i < q_data.attachments.length; i++){
          q_elem.querySelector(".attach-list").insertAdjacentHTML("beforeend",/*html*/`
            <img src=${JSON.stringify(q_data.attachments[i].thumbnail)} id = "img${i}" onclick = 'document.querySelector(".q-attachment > img").setAttribute("src", "${q_data.attachments[i].full}")'>
          `)
        }
      }
    }
    }
  }catch(err){}
}