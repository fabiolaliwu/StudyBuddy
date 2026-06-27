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
                Manual cleaning: We can use software like Blender to clean data manually by deleting unnecessary keyframes, but this is very time consuming.
                <br></br>Neural network/AI approach: not urgent but good to have.
                <br></br>Inverse Kinematics approach: focused on the relationship between joints.

                <br></br><br></br>
                <h4>Set up</h4>
                - Download Unity Hub
                <br></br>- Download Blender
                <br></br>- Download Github Desktop

                <br></br><br></br>
                <h4>Resources</h4>
                  <a href="https://www.youtube.com/watch?v=xD7qUfSOGOE" target="_blank" rel="noopener noreferrer">Japanese Tea Ceremony</a><br></br>
                  <a href="https://www.youtube.com/watch?v=4wQVxj_0Mdo" target="_blank" rel="noopener noreferrer">Hands motions and Tea Master's posture</a><br></br>
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0165237022003722" target="_blank" rel="noopener noreferrer">Inversed Kinetimatic Method</a><br></br>
                  <a href="https://andreasaristidou.com/publications/papers/IK_survey.pdf" target="_blank" rel="noopener noreferrer">Hands motions and Tea Master's posture</a>


                <br></br><br></br>
                <br></br><br></br>
                <h2>May 13th</h2>
                Inverse kinematics (IK) is a method used in animation, robotics, and VR to figure out how joints should move so that a body part reaches a target position.
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
                <br></br>- Doozy might be frozen. If it is, click on the animator in the timeline and select apply scene offsets.
                <br></br>Why isn't it working? The .anim file, which is why the Rig tab is missing, the Muscles: 0 readout right there in the Inspector, confirming this specific file doesn't have the Humanoid data yet.
                
                <br></br><br></br>Doozy is floatig when it is walking and normal when it bends down, and viceversa.
                <br></br>Fix: <br></br>- Build elevator: we create a new empty and call it Doozy_Elevate and drag Doozy inside.
                <br></br>- Record the height fix: have a new Doozy_Elevate animation and start recording. Click on Doozy to modify the height. Once it's done, just save it.
                <br></br>*idk why tf is playing it in the same place. I'll figure it out tomorrow.
                
                <br></br><br></br><h4>Fixing the hands</h4>
                The animation was recorded without wearing a standard optical marker or inertial tracking suit with a head-mounted camera (likely for facial capture), but their hands are completely bare. No reflective markers on the fingers, and no data gloves.
                When the data was exported, the finger joints were left entirely blank, so Unity defaults them to their straight, unmoving T-pose state.
                However, we can fix it within Unity by using an Avatar Mask to layer a natural hand pose over the recording.

                <br></br><br></br><h4>How does Avatar Mask work on humanoid and generic Rig?</h4>
                In a Humanoid setup, the mask works on abstract body parts using that simple green and red stick-figure diagram.Unity automatically translates "Left Hand" to whatever bone is assigned to the left hand, regardless of its name. If you check the hand icons on the diagram, Unity instantly masks out the fingers across the board because it natively understands human anatomy.
                <br></br><br></br>On a Generic rig, Unity has absolutely no idea what a "hand," "leg," or "head" is. To the engine, a Generic rig is just a collection of random floating transform nodes. Because of this, the green stick-figure diagram is completely useless and won't do anything.
                <br></br>To make an Avatar Mask work on a Generic rig, you have to use Transform Masking:
                <br></br>1. You must change the mask import settings from Humanoid to Transform.
                <br></br>2. You have to assign Doozy's specific root skeleton file to the mask.
                <br></br>3. You must click Import Skeleton, which generates a massive, text-based tree view of every single bone in Doozy's body.
                <br></br>4. You have to manually scroll through that list and uncheck the checkbox next to every single finger bone (mixamorig1:LeftHandFinger1, mixamorig1:LeftHandFinger2, etc.) one by one.

                <br></br><br></br>How to create an Avatar Mask for it?
                <br></br>1. Create an Avatar Mask by right clicking on the Assets folder, and double click on the mask after creating it. 
                <br></br>2. Click on humanoid and deselect the rest of the body. Just leave the hands on(green). Click on Transform and select DoozyAvatar, and import the skeleton.
                <br></br>3. Deselct everything, and go down to the skeleton and select ONLY the eight fingers.
                <br></br>
                <br></br>Record the animation <br></br>1. Right click on the project and create a new animation clip and drag it to the avatar(this case Doozy).
                <br></br>2. Click on Doozy, then open Window/Anmation/Animation.
                <br></br>3. Make sure you are selecting what yo want to modify, and click on record. Stop at where you want to modify and twist the fingers/hands.wrist positions.
                <br></br>4. Stop recording.

                

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
          <Link to="/landing" className="back-link">← Back to Courses</Link>
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