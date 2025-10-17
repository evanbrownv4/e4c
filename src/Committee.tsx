import "./Committee.css";
import {exec_committee, non_exec_committee} from './committee_members.tsx';

function CommitteeMemberCards(props: {members: Array<{
    name: string,
    position: string,
    photo: string,
    bio: string
}> }) {
    return ( 
        <div className="committee_grid">
            {props.members.map((member) => (
                <div className="committee_member_card">
                    <img src={member.photo} alt={member.name} className="committee_member_photo"/>
                    <div className="committee_member_info">
                        <h2 className="committee_member_name">{member.name}</h2>
                        <h3 className="committee_member_position">{member.position}</h3>
                        <p className="committee_member_bio">{member.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Comittee() {

    return (
    <div className="committee_container">
        <h2 className="committee_title">Meet the Committee</h2>
        <p className="committee_intro">
            At Engineering for Change (E4C), we believe our society is more than just projects and problem-solving - it’s a community built on collaboration, support, and shared purpose. The committee works hard to create a welcoming environment where every member feels included and valued, whether they’re a first-year just getting started or a project lead managing a team.
            <br/><br/>Our role goes beyond administration. We’re here to provide guidance, resources, and encouragement for all of our members. That could mean helping a project team secure funding, connecting students with external partners, or simply checking in on wellbeing during busy times of the academic year. We also organize events, socials, and workshops to ensure E4C is a space where friendships are formed and ideas can flourish.
            <br/><br/>The committee is united by a common goal: to make sure that E4C remains a supportive family for everyone, while continuing to push forward with sustainable, impactful engineering solutions.
        </p>

        <div className="committee_grid">
            <h1>Executive Committee</h1>
            <CommitteeMemberCards members={exec_committee}/>
        </div>

        <div className="committee_grid">
            <h1>Committee</h1>
            <CommitteeMemberCards members={non_exec_committee}/>
        </div>

    </div>
    )
}