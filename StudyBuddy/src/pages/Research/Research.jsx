import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

function Research() {
  const [activeTab, setActiveTab] = useState('notes');


  const renderContent = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <div className="tab-pane">
            <div className="ai-chat-placeholder">
                <p className="ai-placeholder-text">Manual cleaning: We can use software like Blender to clean data manually by deleting unnecessary keyframes, but this is very time consuming.</p>
                <p className="ai-placeholder-text">Neural network/AI approach: not urgent but good to have</p>
                <p className="ai-placeholder-text">Inverse Kinematics approach: focused on the relationship between joints</p>

                <br></br>
                <h4>Set up</h4>
                <p className="ai-placeholder-text">- Download Unity Hub</p>
                <p className="ai-placeholder-text">- Download Blender</p>
                <p className="ai-placeholder-text">- Download Github Desktop</p>

                <br></br>
                <h4>Resources</h4>
                <p className="ai-placeholder-text">
                    <a href="https://www.youtube.com/watch?v=xD7qUfSOGOE" target="_blank" rel="noopener noreferrer">Japanese Tea Ceremony</a>
                </p>
                <p className="ai-placeholder-text">
                    <a href="https://www.youtube.com/watch?v=4wQVxj_0Mdo" target="_blank" rel="noopener noreferrer">Hands motions and Tea Master's posture</a>
                </p>
                <p className="ai-placeholder-text">
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0165237022003722" target="_blank" rel="noopener noreferrer">Inversed Kinetimatic Method</a>
                </p>
                <p className="ai-placeholder-text">
                    <a href="https://andreasaristidou.com/publications/papers/IK_survey.pdf" target="_blank" rel="noopener noreferrer">Hands motions and Tea Master's posture</a>
                </p>


                <br></br><br></br>
                <br></br><br></br>
                <h2>May 13th</h2>
                <p className="ai-placeholder-text">Inverse kinematics (IK) is a method used in animation, robotics, and VR to figure out how joints should move so that a body part reaches a target position.</p>
                <br></br>
                <h4>How to see the curves of the animation:</h4>- Go to Assets/assets/MoCap/tea master body take 1 (an animation window will pop up)<br></br>- Selecting Kimono1 in Hierarchy. <br></br>- Go back to the animation window, and click on Curves. You will see the noises/inpurities in every single section.
                <br></br> <br></br>

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
                <br></br>Why isn't it working? The .anim file, which is why the Rig tab is missing, the Muscles: 0 readout right there in the Inspector, confirming this specific file doesn't have the Humanoid data yet.
                

            </div>
          </div>
        );
      case 'exercises':
        return (
            <div className="tab-pane notes-container">
                soon
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
          <h1 className="main-title">Research</h1>
        </div>

        <div className="os-tabs-segmented">
          {['notes', 'extra'].map((tab) => (
            <div 
              key={tab}
              className={`tab-segment ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
            </div>
          ))}
        </div>
      </header>

        {renderContent()}
    
    </div>
  );
}

export default Research;