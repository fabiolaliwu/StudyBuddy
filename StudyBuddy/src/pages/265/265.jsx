import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './265.css';

function CT() {
  const [activeTab, setActiveTab] = useState('notes');


  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane notes-container">
            <p className="section-title">The following notes will be based off Eric Schweitzers guidance</p>
            <div className="ai-chat-placeholder">
                <h4>To start, what is Computer Theory?</h4>
                <br></br>
                  <ul>
                    <li>Computer Theory allows us to explore what we can actually do with our computers and also what we can't do with them either. Theory of Computation also allows to deterine how efficiently they work as well. 
                    </li>
                  </ul>
                  <br></br><br></br>
                  <h4>Why do we really need it?</h4>
                <br></br>
                  <ul>
                    <li>Computer Theory allows us to explore what we can actually do with our computers and also what we can't do with them either. Theory of Computation also allows to deterine how efficiently they work as well. 
                    </li>
                  </ul>
                  <br></br><br></br>
                  <h4>Whats the point?</h4>
                <br></br>
                  <ul>
                    <li>Without theory, what do we really have? Theory gives us the opportunity to explore whats actually possible. It allows to find that difference between whats <strong>engineering</strong> and whats <strong>guessing</strong>
                    </li>
                  </ul>


                <br></br><br></br>
                <h4>Textbook: </h4>
                - <a href="https://www.pearson.com/en-us/subject-catalog/p/introduction-to-automata-theory-languages-and-computation/P200000003517/9780321455369" target="_blank" rel="noopener noreferrer">Introduction to Automata Theory, Languages, and Computation, 3rd edition</a><br></br>

                <br></br><br></br>
                <h4>Resource(s): </h4>
                -  <a href="http://infolab.stanford.edu/~ullman/ialc.html" target="_blank" rel="noopener noreferrer">Introduction to Automata Theory, Languages, and Computation</a><br></br>
                -  <a href="http://infolab.stanford.edu/~ullman/ialc/jdu-slides.html" target="_blank" rel="noopener noreferrer">Jeff's Lecture Notes</a><br></br>
                -  <a href="https://users.encs.concordia.ca/~grahne/hmu_slides/main.pdf" target="_blank" rel="noopener noreferrer">Slides by Gosta Grahne</a><br></br>




                <br></br><br></br>
                <br></br><br></br>
                <h3>Some definitions</h3>
                Alphabet: any finite non-empty set of 'symbols' <br></br>
                - Typically symbolized as 'Σ'

            {/* 
                <h4>Applying IK to the Unity avatar</h4>
                - Download Animation Rigging.
                <br></br>
                The "Rig" is the entire structural framework you build to control a character. In the Unity project, Rig 1 and your Generic_Finger_Rig objects are the containers for this system. A rig can contain many different types of tools such as mechanisms to move arms, controllers for eyes, or scripts for clothing physics.

                <br></br><br></br>
                <h4>Generic vs Humanoid Animations</h4>
                The current avatar's animation type is generic, which does not care about anatomy. It is meant for non-human models (quadrupeds, monsters, vehicles, capes) or bipedal models where you don't need human-specific features. It simply imports the bone hierarchy exactly as it was built in your 3D modeling software.
                Animations are bound strictly to the specific bone names and hierarchy of the rig they were made for. If you want to share a Generic animation between two different characters, their skeleton structures and bone names must match exactly.
                Does not have built-in human IK assumptions. If you want to use IK on a Generic rig (like a robot arm or a spider leg), you have to set up custom IK solvers manually.
                More lightweight and performant. The engine reads the raw animation curves and applies them directly to the local transform of the bones without any extra translation layers.
                <br></br><br></br>However, we want the avatar to be humanoid because it expects a specific, standard bipedal skeleton anatomy (two arms, two legs, a spine, head, etc.). The engine requires you to explicitly map the character’s bones to a standardized "human template."
                The engine translates the skeleton into a universal human map, retargeting is seamless. You can take a walking animation made for a 6-foot tall warrior and apply it to a 3-foot tall goblin, and the engine will automatically scale the motion to fit the new proportions.
                Engines provide built-in, advanced features specifically for humans. This includes automatic Inverse Kinematics (IK) for hands and feet (essential for making feet plant properly on uneven terrain) and muscle-limit constraints to prevent joints from bending in anatomically impossible ways.
                Slightly more computationally expensive upfront because the engine has to constantly translate the animation data through its internal humanoid bone map at runtime.

                <br></br><br></br>
                <h4>Humanoid Avatar from Mixamo</h4>
                - Duplicate asset file, not the whole project/folder.
                <br></br>- Translate Humanoid assets into animation file.
                <br></br>- Add the Team Room Scene.fbx from MoCap/Motive to the project's MoCap and transform it to humanoid animation type.
                <br></br>- Do the same thing for your avatar, in this case Doozy. Click on Doozy inthe Hierarchy, then select the Rig tab and change the animation type from generic to humanoid, and click on apply.
                <br></br>- Doozy might be frozen. If it is, click on the animator in the timeline and select apply scene offsets.
                <br></br>Why isn't it working? The .anim file, which is why the Rig tab is missing, the Muscles: 0 readout right there in the Inspector, confirming this specific file doesn't have the Humanoid data yet.
                
                <br></br><br></br>Doozy is floatig when it is walking and normal when it bends down, and viceversa.
                <br></br>Fix: <br></br>- Build elevator: we create a new empty and call it Doozy_Elevate and drag Doozy inside.
                <br></br>- Record the height fix: have a new Doozy_Elevate animation and start recording. Click on Doozy to modify the height. Once it's done, just save it.
                <br></br>*idk why tf is playing it in the same place. I'll figure it out tomorrow.
                
                */}
            </div>
            </div>
        );




// Below case for practice problems



      case 'exercises':
        return (
            <div className="tab-pane notes-container">
                Practice Problems
            </div>
    
        );
      default: return null;
    }
  };

  return (
      <div className="plain-landing">
        <header className="os-header">
          <div className="landing-logo">
            <Link to="/" className="back-link">← Back to Courses</Link>
            <h1 className="main-title">265</h1>
          </div>
          <div className="os-tabs-segmented">
            {['notes', 'practice'].map((tab) => (
              <div
                key={tab}
                className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </header>
        {renderContent()}
      </div>
    );
}

export default CT;