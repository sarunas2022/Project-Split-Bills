// taking group id from session storage

let groupId = Number(sessionStorage.getItem('onClickGroupId'));

document.addEventListener('DOMContentLoaded', async () => {
    if (!localStorage.getItem('token')) location.replace('../login/index.html');

    const bills = await fetchBills();
    displayBills(bills);
});

document
    .querySelector('.add-bill')
    .addEventListener('submit', async (event) => {
        if (!localStorage.getItem('token'))
            location.replace('../login/index.html');

        event.preventDefault();
        const bill = {
            group_id: groupId,
            amount: event.target.elements.amount.value,
            description: event.target.elements.description.value,
        };
        await fetch('http://localhost:8080/bills', {
            method: 'POST',
            body: JSON.stringify(bill),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        document.getElementById('tableOutput').textContent = '';
        const bills = await fetchBills();
        displayBills(bills);
    });

const fetchBills = async () => {
    try {
        const response = await fetch(`http://localhost:8080/bills/${groupId}`, {
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

const displayBills = (data) => {
    data.forEach((bill) => {
        const output = document.getElementById('tableOutput');
        const row = document.createElement('tr');

        const columnId = document.createElement('td');
        columnId.textContent = bill.id;

        const columnDescription = document.createElement('td');
        columnDescription.textContent = bill.description;

        const columnAmount = document.createElement('td');
        columnAmount.textContent = `€ ${bill.amount}`;

        row.append(columnId, columnDescription, columnAmount);
        output.append(row);
    });
};
