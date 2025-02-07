import React, { useState, useRef, useEffect } from 'react';
import SingleApplication from './SingleApplication';
import info from '../../assets/images/info.svg';
import ronald from '../../assets/ronald.png';
import dots from '../../assets/dots.svg';
import mail from '../../assets/mail.svg';
import download from '../../assets/download.svg';
import bookmark from '../../assets/images/bookmark.svg';
import bookmarked from '../../assets/images/bookmarked.svg';
import blueArrow from '../../assets/images/blueArrow.svg';
import whiteArrow from '../../assets/images/whiteArrow.svg';

const MainContainer = () => {
    const [bookmarkedCandidates, setBookmarkedCandidates] = useState({});
    const [profile, setProfile] = useState(null);
    const [option, setOption] = useState(null);
    const [showOption, setShowOption] = useState({});
    const optionsRef = useRef({});
    const selected = [
        {
            id: 1,
            name: 'Ronald Richards',
            position: 'UI/UX Designer',
            image: ronald,
        },
        {
            id: 2,
            name: 'John Doe',
            position: 'Frontend Developer',
            image: ronald,
        },
        {
            id: 3,
            name: 'Jane Smith',
            position: 'Backend Developer',
            image: ronald,
        },
        {
            id: 4,
            name: 'Emily Johnson',
            position: 'Project Manager',
            image: ronald,
        },
        {
            id: 5,
            name: 'Michael Brown',
            position: 'Graphic Designer',
            image: ronald,
        },
        {
            id: 6,
            name: 'Jessica Lee',
            position: 'Marketing Specialist',
            image: ronald,
        },
        {
            id: 7,
            name: 'David Wilson',
            position: 'Data Analyst',
            image: ronald,
        },
        {
            id: 8,
            name: 'Laura Martinez',
            position: 'Software Engineer',
            image: ronald,
        },
        {
            id: 9,
            name: 'Daniel Anderson',
            position: 'Product Manager',
            image: ronald,
        },
        {
            id: 10,
            name: 'Sophia Thompson',
            position: 'HR Specialist',
            image: ronald,
        },
    ];
    
    const handleBookmarkClick = (id) => {
        setBookmarkedCandidates(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleViewProfileClick = (id) => {
        setProfile(id);
        setShowOption(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleClickDot = (id) => {
        setOption(id);
    };

    const handleShowOptions = (id) => {
        setShowOption(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowOption({});
                setProfile(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <toggleContext.Provider value={{setOption}}>
        <div className="flex flex-col gap-4 mx-auto w-[60vw] container items-center ">
            <div className="heading flex justify-between min-w-[60vw] items-center my-6">
                <h1 className="text-lg font-[500]">Saved Candidates</h1>
                <h3 className="flex gap-1 items-center justify-center">
                    <img src={info} alt="" className="text-xs text-[#8d8d8c]" />
                    <span className="text-xs text-[#8d8d8c]">All the candidates are visible until 24 March, 2021</span>
                </h3>
            </div>
            <div className="candidateInfo h-screen overflow-y-scroll hide-scrollbar">
                {selected.map(candidate => (
                    <div key={candidate.id} className="min-w-[60vw] min-h-[8vh] bg-[#ffffff] px-3 border-b py-6 mt-2 hover:shadow-lg hover:border hover:border-[#7900BA] rounded-md">
                        <div className="datas flex justify-between items-center">
                            <div className="Upper flex gap-2 items-center">
                                <img src={candidate.image} alt={candidate.name} className='size-11' />
                                <div className="username flex flex-col items-between justify-center">
                                    <span className="text-[13px]">{candidate.name}</span>
                                    <span className="text-[#8d8d8c] text-[13px]">{candidate.position}</span>
                                </div>
                            </div>
                            <div className="btns flex gap-2 items-center">
                                <img onClick={() => handleBookmarkClick(candidate.id)} src={bookmarkedCandidates[candidate.id] ? bookmarked : bookmark} alt="Bookmark" className='size-10' />
                                <button
                                    onClick={() => handleViewProfileClick(candidate.id)}
                                    className={`${profile === candidate.id ? 'text-[#ffffff] bg-[#7900BA]' : 'text-[#7900BA] bg-[#DCBDED]'} flex gap-1 items-center justify-center rounded-sm relative`}
                                >
                                    <span className="px-3 py-2">View Profile</span>
                                    <img src={profile === candidate.id ? whiteArrow : blueArrow} alt="rightArrow" className="" />
                                    {showOption[candidate.id] && (
                                        <div
                                            ref={(el) => (optionsRef.current = el)}
                                            className='absolute top-12 left-1 z-30 flex flex-col gap-1 items-start justify-start w-[12vw] h-[12vh] bg-[#ffff] shadow-sm rounded-md shadow-[#8d8d8c]'
                                        >
                                            <div className="mail flex items-center justify-center gap-2 mt-4 mx-4">
                                                <img src={mail} alt="" className="size-5" />
                                                <span className="text-[#8d8d8c] text-sm">Send Email</span>
                                            </div>
                                            <div className="mail flex items-center justify-center gap-2 mt-2 mx-4">
                                                <img src={download} alt="" className="size-5" />
                                                <span className="text-[#8d8d8c] text-sm">Download</span>
                                            </div>
                                        </div>
                                    )}
                                </button>
                                <img onClick={() => handleClickDot(candidate.id)} src={dots} alt="..." className={`cursor-pointer rotate-90 opacity-[0.4] ${option === candidate.id ? 'bg-[#8d8d8c]' : null} px-2 py-2 rounded-md`} />
                                {option === candidate.id ? (<SingleApplication/>):null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </toggleContext.Provider>
    );
};

export default MainContainer;




//context provider
import { createContext } from 'react';

export const toggleContext=createContext(null);