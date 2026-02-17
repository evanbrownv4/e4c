import "../styling/Layout.css"
import "../styling/Components.css"
import PageContainer from "../styling/PageContainer.tsx";
import {execCommittee, nonExecCommittee} from '../consts/CommitteeMember.tsx';

type CommitteeMember = {
    name: string;
    position: string;
    photo: string;
    bio: string;
};

function CommitteeMemberCards({ committeeMembers } : { committeeMembers: Array<CommitteeMember> }) {
    return ( 
        <div className="col gap-6">
            {committeeMembers.map((member) => (
                <div className="card card-horizontal">
                    <img src={member.photo} alt={member.name} className="card-img"/>
                    <div className="col grow">
                        <h2 className="title">{member.name}</h2>
                        <h3 className="subtitle">{member.position}</h3>
                        <p className="text">{member.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Committee() {

    return (
    <PageContainer>
        <h1 className="text-6xl font-bold text-center mb-4">Meet the Committee</h1>
        <p className="text-xl text-left">
            At Engineering for Change (E4C), we believe our society is more than just projects and problem-solving - it's a community built on collaboration, support, and shared purpose. The committee works hard to create a welcoming environment where every member feels included and valued, whether they’re a first-year just getting started or a project lead managing a team.
            <br/>Our role goes beyond administration. We're here to provide guidance, resources, and encouragement for all of our members. That could mean helping a project team secure funding, connecting students with external partners, or simply checking in on wellbeing during busy times of the academic year. We also organize events, socials, and workshops to ensure E4C is a space where friendships are formed and ideas can flourish.    
            <br/>The committee is united by a common goal: to make sure that E4C remains a supportive family for everyone, while continuing to push forward with sustainable, impactful engineering solutions.
        </p>

        <div className="col gap-4">
            <h2 className="text-3xl font-bold text-left mt-4">Executive Committee</h2>
            <CommitteeMemberCards committeeMembers={execCommittee}/>
        </div>

        <div className="col gap-4">
            <h2 className="text-3xl font-bold text-left mt-4">Committee</h2>
            <CommitteeMemberCards committeeMembers={nonExecCommittee}/>
        </div>
    </PageContainer>
    )
}