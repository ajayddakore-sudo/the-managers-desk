const main = document.getElementById('main');
const adminBtn = document.getElementById('adminBtn');
const contextBadge = document.getElementById('contextBadge');

const scenarios = {
  plant: [
    {
      id: 'P1', time: '09:18 AM', from: 'Plant Head', subject: 'Recognition — HR Initiative', preview: 'Who would you nominate for recognition after the workforce project?', title: 'The Visible Contributor',
      messages: [
        ['Plant Head', 'Who would you nominate for recognition after the workforce project? Please send me your recommendation before 11.'],
        ['Riya Mehta', 'Can I ask you something? I have noticed that when there is something involving senior leadership, Amit usually gets the opportunity. I am not saying he does not deserve it. I just want to understand what I need to do differently.']
      ],
      evidence: [
        ['Project contribution', 'Riya handled the workforce data, coordination and closure tracker across three workstreams.'],
        ['Leadership exposure', 'Amit presented the weekly updates and was the main contact for the Plant Head.'],
        ['Recognition history', 'Amit was recognised once in the last two quarters. Riya was not.'],
        ['Opportunity history', 'Amit has led 4 leadership-facing initiatives. Riya has led 1.']
      ],
      options: [
        'Recommend Amit because he has been more visible and is already trusted with senior stakeholders.',
        'Review the project contributions and recent opportunity history before making the nomination.',
        'Speak with Riya first and tell her what she needs to demonstrate for future opportunities.',
        'Nominate Riya this time because she has had fewer visible opportunities.'
      ],
      followups: {
        0: 'Riya replies: “Understood. I will focus on delivering on my current work.”',
        1: 'You review the history. The same two people have received most leadership-facing assignments this year.',
        2: 'Riya asks: “Can we discuss what I should work on, specifically?”',
        3: 'Amit messages: “Happy to support. Let me know if you need anything for the review.”'
      }
    },
    {
      id: 'P2', time: '11:42 AM', from: 'Plant HR', subject: 'Urgent project ownership', preview: 'A high-priority plant project needs an owner by today.', title: 'The Go-To Person',
      messages: [
        ['Plant HR Lead', 'We need someone to own the new HR dashboard rollout. The plant wants the first version next week.'],
        ['Your instinct', 'Amit has done this before and is your most dependable person. Sonal has the capability but has not led a project of this visibility yet.']
      ],
      evidence: [
        ['Current workload', 'Amit has 3 active projects. Sonal has 1.'],
        ['Prior exposure', 'Amit has led 5 cross-functional projects. Sonal has supported 3.'],
        ['Recent feedback', 'Sonal was rated strong on execution and learning agility.'],
        ['Development note', 'Sonal has asked for a project where she can take end-to-end ownership.']
      ],
      options: [
        'Give it to Amit. The project has a tight deadline and reliability matters most.',
        'Ask Sonal to lead with Amit as a reviewer because the project is important but also developmental.',
        'Split the project between them so both get visible ownership.',
        'Discuss the requirement with both and decide after understanding their bandwidth and interest.'
      ],
      followups: {
        0: 'The project moves quickly, but Sonal later asks why she is repeatedly given support work rather than ownership.',
        1: 'Sonal replies: “I appreciate the opportunity. Can we agree what success looks like?”',
        2: 'The project starts well, but ownership becomes blurred and both ask who is finally accountable.',
        3: 'Both share their constraints. Sonal has more capacity than expected and wants to stretch.'
      }
    },
    {
      id: 'P3', time: '01:18 PM', from: 'Learning Team', subject: 'One development seat', preview: 'One seat is available for next month’s programme.', title: 'One Development Seat',
      messages: [
        ['Learning Team', 'We have one confirmed seat in next month’s HR leadership programme. Please nominate one team member.'],
        ['Riya Mehta', 'I would like to be considered. I have been trying to build capability in HR analytics and stakeholder communication.']
      ],
      evidence: [
        ['Candidate A', 'Strong performer. Attended two external programmes in the past 12 months.'],
        ['Candidate B', 'Good performer. No external development programme in the past 18 months.'],
        ['Team need', 'The programme includes analytics, stakeholder communication and business partnering.'],
        ['Career note', 'Candidate B has expressed interest in taking on broader work.']
      ],
      options: [
        'Nominate the strongest performer because the seat should go to the person most likely to use it immediately.',
        'Use a consistent set of criteria and review both performance and previous development exposure.',
        'Give the seat to the person who has had fewer opportunities so development is more evenly distributed.',
        'Ask the team members to make a case and decide based on who presents the stronger case.'
      ],
      followups: {
        0: 'The selected employee thanks you. Another team member later asks how development opportunities are allocated.',
        1: 'You note that both performance and previous access to development matter to the decision.',
        2: 'The selected employee asks what development pathway exists for the other team member.',
        3: 'Both make strong cases. The conversation turns to how “readiness” is defined in your team.'
      }
    },
    {
      id: 'P4', time: '03:41 PM', from: 'HR Operations', subject: 'Two similar errors', preview: 'Two team members have made similar process mistakes.', title: 'Same Mistake, Different People',
      messages: [
        ['HR Operations', 'There were two similar errors in the monthly report. One was made by Amit, the other by Vikram.'],
        ['Context', 'Amit is generally dependable and you have a very easy working relationship with him. Vikram has had a few tense conversations with you recently.']
      ],
      evidence: [
        ['Amit’s case', 'One reporting error. Corrected the same day.'],
        ['Vikram’s case', 'One reporting error of similar impact. Corrected the same day.'],
        ['Past record', 'Both have had clean records on similar process issues this year.'],
        ['Team impact', 'The errors created rework but no external consequence.']
      ],
      options: [
        'Treat both as coaching moments and agree the same expectations for next time.',
        'Be more direct with Vikram because recent working friction means the issue needs a firmer conversation.',
        'Handle each conversation differently because the context and relationship are different.',
        'Skip formal action with Amit because he normally performs reliably and address the issue with Vikram.'
      ],
      followups: {
        0: 'Both conversations focus on the same expected standard and the same follow-up.',
        1: 'Vikram responds: “I understand the feedback, but I want to know if the same standard applies to everyone.”',
        2: 'The team sees different responses to similar errors and one member later asks how accountability is determined.',
        3: 'Amit appreciates the trust. Vikram feels the standard was applied differently.'
      }
    }
  ],
  corporate: [
    {
      id: 'C1', time: '09:24 AM', from: 'CHRO Office', subject: 'Leadership exposure', preview: 'One team member needs to present the HR transformation update.', title: 'Leadership Exposure',
      messages: [
        ['CHRO Office', 'We have 20 minutes in the leadership review. Please nominate one person to present the HR transformation update.'],
        ['Your team', 'Amit has presented to leadership several times. Riya has strong delivery but has not yet had the same exposure.']
      ],
      evidence: [
        ['Content ownership', 'Riya owns the analytics and implementation workstream.'],
        ['Leadership experience', 'Amit has presented 4 times in the last 6 months.'],
        ['Work quality', 'Both have received strong recent feedback.'],
        ['Development note', 'Riya has asked for more leadership-facing exposure.']
      ],
      options: [
        'Choose Amit because he is already comfortable with senior leadership and the review is important.',
        'Choose Riya because she owns the core work and this would give her needed exposure.',
        'Use the opportunity to involve both — one presents and the other leads the Q&A or a specific section.',
        'Review previous leadership opportunities before deciding how this assignment should be handled.'
      ],
      followups: {
        0: 'Riya messages: “I would have liked to understand what I need to demonstrate to get that opportunity next time.”',
        1: 'Riya prepares the presentation. Amit offers to help with likely leadership questions.',
        2: 'Both prepare together. The review becomes a shared leadership-facing opportunity.',
        3: 'You notice that recent visibility has been concentrated among a small number of team members.'
      }
    },
    {
      id: 'C2', time: '11:07 AM', from: 'HR Projects', subject: 'Project ownership', preview: 'A cross-functional HR project is starting this week.', title: 'The Safe Choice',
      messages: [
        ['HR Projects', 'The employee experience project needs an owner by 2 PM today.'],
        ['Your team', 'Amit is the obvious safe choice. Riya has the capability but needs a chance to lead a complex project end-to-end.']
      ],
      evidence: [
        ['Amit', 'Reliable, quick turnaround, already leading two projects.'],
        ['Riya', 'Strong problem-solving, has supported similar work but not owned it.'],
        ['Capacity', 'Amit is at 80% planned capacity. Riya is at 60%.'],
        ['Development', 'Riya’s development goal includes project ownership.']
      ],
      options: [
        'Assign Amit. The project has a tight timeline and the priority is execution certainty.',
        'Assign Riya with a clear checkpoint structure and access to Amit for review.',
        'Give co-ownership so both gain exposure, even if accountability is shared.',
        'Discuss the project briefly with both and decide after understanding interest and constraints.'
      ],
      followups: {
        0: 'Amit accepts. Later, he mentions his workload is becoming difficult to sustain.',
        1: 'Riya asks for a clear success definition and starts building the project plan.',
        2: 'Both are engaged, but accountability needs to be clarified quickly.',
        3: 'Riya says she wants the stretch opportunity. Amit says he can support but would prefer not to own another project.'
      }
    },
    {
      id: 'C3', time: '01:36 PM', from: 'HR Leadership', subject: 'Recognition', preview: 'Three team members contributed to a major HR initiative.', title: 'Who Gets the Credit?',
      messages: [
        ['HR Leadership', 'We want one primary nomination for the initiative. Please send your recommendation.'],
        ['Context', 'A led the visible presentation. B handled the most difficult execution work. C solved several critical issues quietly behind the scenes.']
      ],
      evidence: [
        ['A', 'Led leadership presentations and coordinated stakeholder communication.'],
        ['B', 'Managed process redesign, escalations and implementation.'],
        ['C', 'Resolved three critical data and system issues that prevented delays.'],
        ['Previous recognition', 'A has received two visible recognitions this year. B and C have received one each.']
      ],
      options: [
        'Nominate A because leadership visibility and stakeholder management were central to the project.',
        'Nominate B because the execution workload and implementation impact were substantial.',
        'Look at contribution evidence and previous recognition before deciding how credit should be allocated.',
        'Recommend team recognition rather than a single-person award.'
      ],
      followups: {
        0: 'B later asks what contribution is most valued when recognition decisions are made.',
        1: 'A is pleased, while C asks whether behind-the-scenes work can be made more visible next time.',
        2: 'The evidence shows the contribution was distributed differently across the project stages.',
        3: 'The leadership team asks you to explain how the team-level contribution will be represented.'
      }
    },
    {
      id: 'C4', time: '03:52 PM', from: 'Riya Mehta', subject: 'Career conversation', preview: '“I want to understand what I need to do for bigger opportunities.”', title: 'The Career Conversation',
      messages: [
        ['Riya Mehta', 'I feel like some people get more exposure than others. I want to understand what I need to do to be considered for bigger opportunities.'],
        ['Context', 'Riya has strong execution, limited leadership exposure and a good recent performance trajectory.']
      ],
      evidence: [
        ['Recent performance', 'Strong delivery across two major workstreams.'],
        ['Exposure', 'One leadership-facing assignment in the last year.'],
        ['Development', 'Completed the required technical learning but needs more presentation exposure.'],
        ['Team pattern', 'The same two people have received most high-visibility assignments.']
      ],
      options: [
        'Explain that opportunities go to people who have already proven themselves in visible situations.',
        'Discuss specific capability gaps and agree on measurable steps for the next opportunity.',
        'Tell her you will keep her in mind when something suitable comes up.',
        'Review how opportunities have been allocated across the team and discuss what you can change as a manager.'
      ],
      followups: {
        0: 'Riya asks: “How am I supposed to prove myself if I do not get the exposure?”',
        1: 'You agree on two concrete development steps and a future stretch assignment.',
        2: 'Riya thanks you, but the conversation ends without a clear next step.',
        3: 'The conversation becomes broader: not just what Riya needs to change, but what the manager can change.'
      }
    }
  ]
};

const state = {
  screen: 'landing', context: null, scenarioIndex: 0, currentScenario: null,
  actions: [], sessions: [], completed: false,
};

function now(){ return new Date().toISOString(); }
function logAction(payload){ state.actions.push({ ...payload, timestamp: now() }); saveDemo(); }

function saveDemo(){
  try{
    localStorage.setItem('manager-desk-demo', JSON.stringify({context:state.context,actions:state.actions,completed:state.completed,scenarioIndex:state.scenarioIndex,updatedAt:now()}));
  }catch(e){}
}
function loadDemo(){
  try{
    const raw=localStorage.getItem('manager-desk-demo');
    if(!raw) return;
    const saved=JSON.parse(raw);
    if(saved && typeof saved==='object'){
      state.context=saved.context || null;
      state.actions=Array.isArray(saved.actions)?saved.actions:[];
      state.completed=!!saved.completed;
      state.scenarioIndex=Number.isFinite(saved.scenarioIndex)?saved.scenarioIndex:0;
    }
  }catch(e){}
}

function setBadge(){
  if(!state.context){ contextBadge.classList.add('hidden'); return; }
  contextBadge.textContent = state.context === 'plant' ? 'Plant HR' : 'Corporate HR';
  contextBadge.classList.remove('hidden');
}
function render(){
  setBadge();
  if(state.screen==='landing') return renderLanding();
  if(state.screen==='context') return renderContext();
  if(state.screen==='workspace') return renderWorkspace();
  if(state.screen==='admin') return renderAdmin();
  if(state.screen==='complete') return renderComplete();
}

function renderLanding(){
  main.innerHTML = `
    <section class="hero">
      <div>
        <div class="kicker">Internal HR Simulation</div>
        <h1>The Manager’s Desk</h1>
        <p class="lede">A day in the life of an HR Manager. Some decisions look simple. Until people are involved.</p>
        <div class="meta-row"><span>Monday</span><span class="dot"></span><span>08:57 AM</span></div>
        <button class="primary-btn" type="button" id="startBtn">Start the day</button>
      </div>
      <div class="hero-visual" aria-label="Illustrated manager workspace">
        <div class="window-light"></div>
        <div class="office-note"><strong>Today</strong><span>People matters<br>Waiting on you.<br>Nothing unusual.</span></div>
        <div class="desk"></div><div class="laptop"><div class="laptop-screen"><div class="line"></div><div class="line short"></div><div class="line"></div><div class="line short"></div></div></div>
        <div class="phone"><div class="phone-screen"><div class="phone-dot"></div><div style="height:10px"></div><div style="height:5px;background:#bec7bf;margin-bottom:5px"></div><div style="height:5px;background:#bec7bf;width:70%"></div></div></div>
        <div class="coffee"></div>
      </div>
    </section>`;
  document.getElementById('startBtn').addEventListener('click',()=>{state.screen='context';render();});
}

function renderContext(){
  main.innerHTML=`<section class="choice-wrap">
    <div class="kicker">Before you begin</div>
    <h2>Tell us a little about your team.</h2>
    <p class="subtle">Your simulation will reflect the environment your HR team operates in. Nothing here is scored.</p>
    <div class="context-grid">
      <button class="context-card" type="button" data-context="plant"><div><div class="eyebrow">Track 01</div><h3>Plant HR</h3><p>Your HR team operates in a manufacturing / plant environment.</p></div><span class="arrow">↗</span></button>
      <button class="context-card" type="button" data-context="corporate"><div><div class="eyebrow">Track 02</div><h3>Corporate HR</h3><p>Your HR team operates in a corporate / business-function environment.</p></div><span class="arrow">↗</span></button>
    </div>
  </section>`;
  document.querySelectorAll('[data-context]').forEach(btn=>btn.addEventListener('click',()=>{
    state.context=btn.dataset.context; logAction({action:'context_selected',context:state.context}); state.scenarioIndex=0; state.screen='workspace'; render();
  }));
}

function getScenarios(){ return scenarios[state.context] || []; }
function renderWorkspace(){
  const list=getScenarios();
  const next=list[state.scenarioIndex];
  const completedCount=Math.min(state.scenarioIndex,list.length);
  const contextName=state.context==='plant'?'Plant HR':'Corporate HR';
  const people=state.context==='plant'
    ? [['AS','Amit Sharma','HR Executive'],['RM','Riya Mehta','HR Officer'],['SR','Sonal Rao','HR Operations'],['VS','Vikram Shah','IR Manager']]
    : [['AS','Amit Sharma','HRBP'],['RM','Riya Mehta','Talent Acquisition'],['SR','Sonal Rao','L&D'],['VS','Vikram Shah','HR Operations']];
  const pct=Math.round((completedCount/list.length)*100);
  main.innerHTML=`<section class="workspace">
    <aside class="rail" aria-label="Manager workspace">
      <button class="rail-btn active" type="button"><span class="rail-icon">⌂</span>Desk</button>
      <button class="rail-btn" type="button" id="teamBtn"><span class="rail-icon">◌</span>Team</button>
      <button class="rail-btn" type="button" id="calendarBtn"><span class="rail-icon">▦</span>Calendar</button>
      <button class="rail-btn" type="button" id="inboxBtn"><span class="rail-icon">✉</span>Inbox</button>
    </aside>
    <div class="workpanel">
      <div class="workhead">
        <div>
          <div class="kicker">Monday · ${next ? next.time : '04:58 PM'}</div>
          <h2>Your desk</h2>
          <div class="time">The day is moving. A few things are waiting on you.</div>
        </div>
        <div class="work-meta"><span class="pill">${contextName}</span></div>
      </div>
      <div class="progress-wrap">
        <div class="progress-row"><span>${completedCount} of ${list.length} moments completed</span><span>${pct}% of the day</span></div>
        <div class="progress-line"><span style="width:${pct}%"></span></div>
      </div>
      <div class="inbox-list">
        ${next ? `<button class="message message-primary unread" id="openScenario" type="button">
          <div class="message-top"><span class="message-from">${next.from}</span><span class="message-time">${next.time}</span></div>
          <div class="message-sub">${next.subject}</div>
          <div class="message-preview">${next.preview}</div>
          <div class="message-action">Open message →</div>
        </button>` : `<div class="message"><div class="message-top"><span class="message-from">Desk cleared</span><span class="message-time">04:58 PM</span></div><div class="message-sub">You have reached the end of the day.</div><div class="message-preview">There are no more moments waiting on your desk.</div></div>`}
        <div class="message" style="cursor:default"><div class="message-top"><span class="message-from">Calendar</span><span class="message-time">11:39 AM</span></div><div class="message-sub">Leadership review moved</div><div class="message-preview">You now have less time to prepare. The meeting is still on your calendar.</div></div>
        <div class="message" style="cursor:default"><div class="message-top"><span class="message-from">HR Operations</span><span class="message-time">12:18 PM</span></div><div class="message-sub">Pending inputs</div><div class="message-preview">Two items are waiting for your review before close of day.</div></div>
      </div>
    </div>
    <aside class="rightpanel">
      <div class="side-card">
        <h3>Today</h3>
        <div class="agenda"><div class="agenda-time">09:30</div><div class="agenda-title">Team huddle</div></div>
        <div class="agenda current"><div class="agenda-time">11:00</div><div class="agenda-title">Leadership review</div></div>
        <div class="agenda"><div class="agenda-time">15:30</div><div class="agenda-title">One-on-one</div></div>
      </div>
      <div class="side-card">
        <h3>Your team</h3>
        ${people.map(x=>`<div class="team-mini"><div class="avatar">${x[0]}</div><span>${x[1]}<small>${x[2]}</small></span></div>`).join('')}
      </div>
      <div class="side-card">
        <div class="badge-line"><span class="badge-dot"></span><strong>Nothing is being scored on screen.</strong></div>
        <p class="quiet-note" style="margin:10px 0 0">You can look around, ask for context and take your time before making a decision.</p>
      </div>
    </aside>
  </section>`;
  const open=document.getElementById('openScenario');
  if(open) open.addEventListener('click',()=>openScenario(next));
  document.getElementById('teamBtn').addEventListener('click',()=>showTeamModal());
  document.getElementById('calendarBtn').addEventListener('click',()=>toast('Calendar: leadership review is still at 11:00 AM.'));
  document.getElementById('inboxBtn').addEventListener('click',()=>toast('Inbox: 1 new people matter is waiting.'));
}
function openScenario(sc){
  state.currentScenario=sc; logAction({action:'scenario_opened',scenarioId:sc.id});
  showModal(`
    <div class="modal-header"><div><div class="kicker">${sc.time} · ${state.context==='plant'?'Plant HR':'Corporate HR'}</div><h2>${sc.title}</h2><p class="subtle">Take the information you need. Then decide what you would do.</p></div><button class="close-btn" type="button" id="closeModal" aria-label="Close">×</button></div>
    <div class="chat">${sc.messages.map(m=>`<div class="chat-msg"><div class="chat-name">${m[0]}</div><div class="chat-body">${m[1]}</div></div>`).join('')}</div>
    <div style="display:flex;justify-content:space-between;align-items:end"><div><div class="kicker">What you can see</div><div class="subtle">Open the evidence before you decide. The system records what you choose to look at.</div></div></div>
    <div class="evidence-grid">${sc.evidence.map((e,i)=>`<button class="evidence-card" type="button" data-evidence="${i}"><h4>${e[0]}</h4><p>${e[1]}</p><span class="detail-btn">Review</span></button>`).join('')}</div>
    <div class="kicker" style="margin-top:24px">What do you do?</div>
    <div class="option-list">${sc.options.map((o,i)=>`<button class="option" type="button" data-option="${i}">${o}</button>`).join('')}</div>
    <div class="modal-foot"><span class="quiet">The simulation does not show an evaluation.</span><button class="secondary-btn" type="button" id="closeScenario">Keep this open</button></div>`);
  document.getElementById('closeModal').addEventListener('click',closeModal);
  document.getElementById('closeScenario').addEventListener('click',closeModal);
  document.querySelectorAll('[data-evidence]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=Number(btn.dataset.evidence); logAction({action:'evidence_viewed',scenarioId:sc.id,evidenceIndex:i}); toast(`Reviewed: ${sc.evidence[i][0]}`);
  }));
  document.querySelectorAll('[data-option]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=Number(btn.dataset.option); logAction({action:'decision_made',scenarioId:sc.id,optionIndex:i,decision:sc.options[i]});
    closeModal(); setTimeout(()=>showConsequence(sc,i),120);
  }));
}

function showConsequence(sc,i){
  showModal(`<div class="modal-header"><div><div class="kicker">Later that day</div><h2>What happens next</h2><p class="subtle">The day keeps moving. Your choice changes what appears on your desk.</p></div><button class="close-btn" type="button" id="closeModal">×</button></div><div class="chat"><div class="chat-msg"><div class="chat-name">Follow-up</div><div class="chat-body">${sc.followups[i]}</div></div></div><div class="modal-foot"><span class="quiet">No score is shown. The next situation is simply waiting.</span><button class="primary-btn" type="button" id="nextScenario">Continue</button></div>`);
  document.getElementById('closeModal').addEventListener('click',closeModal);
  document.getElementById('nextScenario').addEventListener('click',()=>{ closeModal(); state.scenarioIndex++; if(state.scenarioIndex>=getScenarios().length){ state.completed=true; state.sessions.push(buildSession()); state.screen='complete'; render(); } else render(); });
}
function buildSession(){
  return {id:`S-${Date.now()}`,context:state.context,completedAt:now(),actions:[...state.actions]};
}
function showTeamModal(){
  const people=state.context==='plant' ? [['AS','Amit Sharma','HR Executive','2.8 years'],['RM','Riya Mehta','HR Officer','4.1 years'],['SR','Sonal Rao','HR Operations','2.2 years'],['VS','Vikram Shah','IR Manager','6.5 years']] : [['AS','Amit Sharma','HRBP','3.2 years'],['RM','Riya Mehta','Talent Acquisition','4.1 years'],['SR','Sonal Rao','L&D','2.7 years'],['VS','Vikram Shah','HR Operations','5.2 years']];
  showModal(`<div class="modal-header"><div><div class="kicker">Team directory</div><h2>Your team</h2><p class="subtle">A little context is available before you make decisions.</p></div><button class="close-btn" type="button" id="closeModal">×</button></div><div>${people.map(p=>`<div class="message" style="margin-bottom:10px;cursor:default"><div style="display:flex;align-items:center;gap:14px"><div class="avatar">${p[0]}</div><div><strong>${p[1]}</strong><div class="subtle" style="font-size:13px">${p[2]} · ${p[3]}</div></div></div></div>`).join('')}</div>`);
  document.getElementById('closeModal').addEventListener('click',closeModal);
  logAction({action:'team_directory_opened'});
}
function showModal(html){
  const wrap=document.createElement('div'); wrap.className='modal-wrap'; wrap.id='modalWrap'; wrap.innerHTML=`<div class="modal">${html}</div>`; document.body.appendChild(wrap);
}
function closeModal(){const m=document.getElementById('modalWrap'); if(m) m.remove();}
function toast(msg){const t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),1800);}

function renderComplete(){
  main.innerHTML=`<section class="choice-wrap" style="max-width:780px;padding-top:60px">
    <div class="kicker">04:58 PM</div>
    <h2 style="font-size:66px;line-height:.98">That’s the day.</h2>
    <p class="lede" style="font-size:19px;max-width:650px">You made a series of decisions. Some quickly. Some after looking twice.</p>
    <div style="margin-top:36px;padding:21px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center">
      <div><div class="kicker">Simulation recorded</div><div class="subtle">Your decisions and interactions have been captured for the HR report.</div></div>
      <span class="pill">${state.context==='plant'?'Plant HR':'Corporate HR'}</span>
    </div>
    <div style="margin-top:30px;display:flex;gap:11px;flex-wrap:wrap"><button class="primary-btn" type="button" id="adminView">View HR report (demo)</button><button class="secondary-btn" type="button" id="restart">Start again</button></div>
  </section>`;
  document.getElementById('adminView').addEventListener('click',()=>{state.screen='admin';render()});
  document.getElementById('restart').addEventListener('click',()=>{state.actions=[];state.scenarioIndex=0;state.completed=false;saveDemo();state.screen='context';render()});
  saveDemo();
}
function renderAdmin(){
  const context=state.context || 'plant';
  const actions=state.actions;
  const decisions=actions.filter(a=>a.action==='decision_made');
  const views=actions.filter(a=>a.action==='evidence_viewed').length;
  const names = context==='plant' ? 'Plant HR' : 'Corporate HR';
  const observations=[];
  const viewedTitles=actions.filter(a=>a.action==='evidence_viewed').length;
  const decisionOptions=decisions.map(d=>d.optionIndex);
  const repeatedExposure=decisionOptions.filter(x=>[1,2,3].includes(x)).length;
  if(views>=4) observations.push(['Observed strength','Evidence seeking','The manager repeatedly opened additional information before making decisions.']);
  if(viewedTitles>=6) observations.push(['Observed strength','Information depth','The manager explored the surrounding context rather than relying only on the first message.']);
  if(repeatedExposure>=2) observations.push(['Observed pattern','Opportunity judgement','The manager used a mix of business continuity and development considerations across opportunity decisions.']);
  if(decisions.some(d=>d.scenarioId==='P4')) observations.push(['Observed pattern','Consistency','The final comparison scenario provides evidence on how the manager responds when similar mistakes involve people with different working relationships.']);
  if(!observations.length) observations.push(['Observed pattern','Further review','The demo session contains limited evidence. A longer simulation would create a more reliable behavioural picture.']);
  main.innerHTML=`<section class="choice-wrap" style="max-width:1100px"><div class="kicker">HR Admin · Demo</div><div style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap"><div><h2 style="font-size:54px;margin-bottom:6px">Manager report</h2><p class="subtle">Demo manager · ${names}</p></div><button class="secondary-btn" type="button" id="backDesk">Back to desk</button></div>
  <div class="report-grid"><div class="report-card"><div class="label">Status</div><div class="value">Completed</div></div><div class="report-card"><div class="label">Decisions recorded</div><div class="value">${decisions.length}</div></div><div class="report-card"><div class="label">Evidence reviewed</div><div class="value">${views}</div></div></div>
  <div class="section"><h3>Observed behaviour</h3>${observations.map(o=>`<div class="obs"><div class="kicker">${o[0]}</div><strong>${o[1]}</strong><p>${o[2]}</p></div>`).join('')}</div>
  <div class="section"><h3>Scenario evidence</h3>${decisions.map(d=>`<div class="obs"><strong>${d.scenarioId}</strong><p>${d.decision}</p></div>`).join('')}</div>
  <div class="section"><button class="primary-btn" type="button" id="exportBtn">Export demo report</button></div>
  </section>`;
  document.getElementById('backDesk').addEventListener('click',()=>{state.screen='workspace';render()});
  document.getElementById('exportBtn').addEventListener('click',()=>{
    const payload={context,stateActions:state.actions,generatedAt:now()}; const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='manager-desk-demo-report.json'; a.click(); URL.revokeObjectURL(a.href); toast('Demo report exported.');
  });
}

loadDemo();
adminBtn.addEventListener('click',()=>{ if(!state.context){toast('Start a demo session first.')} else {state.screen='admin';render();} });
render();
