import { find, runtime} from "webextension-polyfill";
import BrainlyApi from "./BrainlyApi"
let noanswer = runtime.getURL("resources/Compositions/Brainly_Plus_Jump.svg");
let removedq = runtime.getURL("resources/Compositions/Ladies@Brainly.svg");

function add_attachments(item, elem){
  if(item.attachments.length !== 0){
    let rotation = 0;
    elem.querySelector(".rotate").addEventListener("click", function(){
      elem.querySelector(".a-attachment > img").setAttribute("style", `transform: rotate(${rotation+90}deg)`)
      rotation += 90;
    });
    elem.querySelector(".newtab").addEventListener("click", function(){
      window.open(elem.querySelector(".a-attachment > img").getAttribute("src"),"_blank");
    });
    
    if(item.attachments[0].extension === "png" || item.attachments[0].extension === "jpg" || item.attachments[0].extension === "jpeg"){
      elem.querySelector(".a-attachment").classList.add("show");
    elem.querySelector(".a-attachment").insertAdjacentHTML("beforeend",/*html*/`
    <img src=${JSON.stringify(item.attachments[0].full)}>
    `)
    if(item.attachments.length > 1){
      for(let i = 0; i < item.attachments.length; i++){
        elem.querySelector(".attach-list").insertAdjacentHTML("beforeend",/*html*/`
          <img src=${JSON.stringify(item.attachments[i].thumbnail)} id = "img${i}" onclick = 'document.querySelector(".a-attachment > img").setAttribute("src", "${item.attachments[i].full}")'>
        `)
      }
    }
  }
  }
}

function add_answer(ans,res,a){
  let answerer = res.users_data.find(({id}) => id === ans.user.id);
  let answer_elem = /*html*/`
  <div class = "content-item answer${a}">
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
    <div class="adata">
      <div class="user-info">
        <div class="pfp"><div class="sg-avatar"><div class="sg-avatar__image sg-avatar__image--icon"><div class="sg-icon sg-icon--gray-light sg-icon--x32 sg-avatar__icon"><svg class="sg-icon__svg"><use xlink:href="#icon-profile"></use></svg></div></div></div></div>
        <div class="adata-info-txt">
          <div class="text-user">
            <div class="username sg-text sg-text--gray sg-text--bold sg-text--small rightdot">username</div>
            <div class="rank sg-text sg-text--small">Ambitious</div>
          </div>
          <div class="text-subj">
            <div class = "sg-text sg-text--xsmall rightdot">Subject</div>
            <div class = "sg-text sg-text--xsmall">Middle School</div>
          </div>
        </div>
      </div>
      <div class="a-content sg-text">
        Content
      </div>
      <div class="a-attachment">
        <div class="attachment-tools">
          <button class="newtab"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-open_in_new_tab"></use></svg></div></button>
          <button class="rotate"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-rotate"></use></svg></div></button>
        </div>
      </div>
      <div class="attach-list"></div>
      <div class="actions">
        <button class="adel one">1</button>
        <button class="adel two">2</button>
        <button class="adel three">3</button>
        <div class="delete"><div class="sg-icon sg-icon--dark sg-icon--x32"><svg class="sg-icon__svg"><use xlink:href="#icon-trash"></use></svg></div></div>
      </div>
      <div class="delmenu">
        <div class="primary-items"></div>
        <div class="secondary-items"></div>
      </div>
    </div>
  </div>
  `
  document.querySelector(".answers").insertAdjacentHTML("beforeend",answer_elem);
  let this_ans = document.querySelector(`.answer${a}`);

  if(answerer.avatar !== null){
    this_ans.querySelector(".pfp").innerHTML = /*html*/`
      <img src=${answerer.avatar[64]} alt="">
      `
  }

  this_ans.querySelector(".text-user .username").innerHTML = answerer.nick;
  this_ans.querySelector(".text-user .rank").innerHTML = answerer.ranks.names[0];
  this_ans.querySelector(".text-user .rank").setAttribute("style", `color: ${answerer.ranks.color}`)
  this_ans.querySelector(".a-content").innerHTML = ans.content;

  add_attachments(ans, this_ans);
}
function add_question_data(res, d_reference){
  let q_data = res.data.task;
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
  
  add_attachments(q_data, q_elem);

  let q_del_rsn = res.data.delete_reasons.task;
  for(let i = 0; i < q_del_rsn.length; i++){
    q_elem.querySelector(".primary-items").insertAdjacentHTML("beforeend",/*html*/`
      <label class="sg-radio sg-radio--xxs" for="${q_del_rsn[i].id}">
        <input type="radio" class="sg-radio__element" name="group1" id="${q_del_rsn[i].id}" index = "${i}">
        <span class="sg-radio__ghost" aria-hidden="true"></span>
        <span class="sg-text sg-text--small sg-text--bold sg-radio__label">${q_del_rsn[i].text}</span>
      </label>`
    )
  }
  q_elem.querySelector(".primary-items").addEventListener("change", function(){
    let selected_index = q_elem.querySelector(".primary-items input:checked").getAttribute("index");
    console.log(q_del_rsn[selected_index]);
  });
  
}
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
          <div class="delmenu">
            <div class="primary-items"></div>
            <div class="secondary-items"></div>
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
  let res = await fetch(`https://brainly.com/api/28/moderation_new/get_content`, { method: "POST",body: (`{"model_type_id":1,"model_id":${id},"schema":"moderation.content.get"}`)}).then(data => data.json())
  let d_reference = await fetch('https://brainly.com/api/28/api_config/desktop_view', {method: "GET"}).then(data => data.json());
  let basic_data = await fetch(`https://brainly.com/api/28/api_tasks/main_view/${id}`, {method: "GET"}).then(data => data.json());
  //console.log(basic_data.data.task.settings.is_deleted);
  document.querySelector(".sg-spinner-container").classList.add("remove");

  add_question_data(res,d_reference);
  if(res.data.responses.length !== 0){
    document.querySelector(".answers").innerHTML = '';
  }
  for(let a = 0; a < res.data.responses.length; a++){
    add_answer(res.data.responses[a],res, a);
  }
}