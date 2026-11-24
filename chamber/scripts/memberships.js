const button1 = document.querySelector('.non-profit')
const modal = document.querySelector("#membership-modal");
const closeModal = document.querySelector(".close-button");
const openModalButtons = document.querySelectorAll(".membership-button");

const levelName = document.querySelector("#level-name");
const benefits = document.querySelector("#benefits");
const cost = document.querySelector("#cost");

const levels = [
    {
        levelName: 'Non-profit',
        benefits: [
            'Listing in the online Chamber member directory',
            'Invitation to networking mixers and community events',
            'Access to member-only workshops and educational webinars',
            'Ribbon-cutting ceremony support for new initiatives',
            'Digital member badge for your organization website',
            'Community spotlight feature in the monthly newsletter'
        ],
        cost: 40
    },
    {
        levelName: 'Bronze',
        benefits: [
            'All Non-Profit tier benefits included',
            'Enhanced business directory profile with logo and social links',
            '2 complimentary passes to quarterly business luncheons',
            'Ability to post job openings and deals on the Chamber board',
            'Official Chamber window decal and membership plaque',
            'Subscription to local economic development reports'
        ],
        cost: 150
    },
    {
        levelName: 'Silver',
        benefits: [
            'All Bronze tier benefits included',
            'Priority placement in the online business directory',
            '4 complimentary passes to quarterly business luncheons',
            'Featured business spotlight on Chamber social media channels',
            '10% discount on event sponsorships and booth rentals',
            'Access to member-to-member discount program and mailing lists'
        ],
        cost: 350
    },
    {
        levelName: 'Gold',
        benefits: [
            'All Silver tier benefits included',
            'Homepage logo placement and premier directory banner',
            'VIP table (8 seats) at the Annual Chamber Gala',
            'Complimentary booth space at the annual Business Expo',
            'Dedicated email blast to all Chamber members twice a year',
            'Seat on the Business Advisory Roundtable with local leadership'
        ],
        cost: 750
    }
];

closeModal.addEventListener("click", () => {
    modal.close();
});
// close modal when clicking outside
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

function displayModals() {
    openModalButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            //populate
            const currentLevel = levels[index];
            levelName.innerHTML = `${currentLevel.levelName} Membership`;
            benefits.innerHTML = "";
            currentLevel.benefits.forEach((benefit) => {
                const li = document.createElement("li")
                li.innerHTML = benefit;
                benefits.appendChild(li);
            });
            cost.innerHTML = `<strong>ANUAL COST:</strong> $${currentLevel.cost}`;
            modal.showModal();
        });
    });
}

displayModals();