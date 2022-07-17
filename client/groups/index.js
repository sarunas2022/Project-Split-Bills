// loading a content

document.addEventListener('DOMContentLoaded', async () => {
    if (!localStorage.getItem('token')) location.replace('../login/index.html');

    const groups = await fetchGroups();
    const allGroups = await fetchAllGroups();
    displayGroups(groups);
    displayAllGroups(allGroups);
});

// submit event
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!localStorage.getItem('token')) location.replace('../login/index.html');

    const groupId = {
        id: event.target.elements.id.value,
    };
    await fetch('http://localhost:8080/accounts', {
        method: 'POST',
        body: JSON.stringify(groupId),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    document.querySelector('.groups-output').textContent = '';
    document.querySelector('.no-groups-message').textContent = '';

    const groups = await fetchGroups();
    displayGroups(groups);
});

// fetching all available groups
const fetchAllGroups = async () => {
    try {
        const response = await fetch('http://localhost:8080/groups', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        alert('Unexpected error!');
        localStorage.clear();
        location.replace('../login/index.html');
    }
};

// fetching groups where user is a member
const fetchGroups = async () => {
    try {
        const response = await fetch('http://localhost:8080/accounts', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        alert('Unexpected error!');
        localStorage.clear();
        location.replace('../login/index.html');
    }
};
// displaying all groups
const displayAllGroups = (data) => {
    const allGroupsOutput = document.querySelector('.available-groups');
    data.forEach((group) => {
        const card = document.createElement('div');
        card.classList.add('all-group-wrapper');

        const groupId = document.createElement('h1');
        groupId.textContent = `ID: ${group.id}`;

        const groupName = document.createElement('p');
        groupName.textContent = group.name;

        card.append(groupId, groupName);
        allGroupsOutput.append(card);
    });
};

// displaying groups user is member of
const displayGroups = (data) => {
    const userGroupsOutput = document.querySelector('.groups-output');
    // information message if user is not a member of any group
    if (data.length === 0) {
        const textOutput = document.querySelector('.no-groups-message');
        const noGroupsText = document.createElement('h3');
        // noGroupsText.style.display = 'none';
        noGroupsText.classList.add('.no-groups-text');
        noGroupsText.textContent =
            'Sadly, you ar not a member of any group, choose from available groups below to add to your group list';
        textOutput.append(noGroupsText);
    }
    data.forEach((group) => {
        const card = document.createElement('div');
        card.classList.add('group-wrapper');

        const groupId = document.createElement('h1');
        groupId.textContent = `ID: ${group.group_id}`;

        const groupName = document.createElement('p');
        groupName.textContent = group.name;

        card.append(groupId, groupName);
        userGroupsOutput.append(card);

        // Adding click event on every group div and saving group id in SS
        card.addEventListener('click', () => {
            sessionStorage.setItem('onClickGroupId', group.group_id);
            location.replace('../bills/index.html');
        });
    });
};

// const addToGroup = async (data) => {
//     try {
//         const response = await fetch('http://localhost:8080/accounts', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//         });
//         const user = await response.json();
//         if (user.error) {
//             alert(user.error);
//         } else {
//             return user;
//         }
//     } catch (err) {
//         console.log(err);
//     }
// };
