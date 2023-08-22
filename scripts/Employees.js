import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const employeeId = clickTarget.dataset.employeeId
        let ordersList = []

        // debugger

        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                for (const order of orders) {
                    if (order.employeeId === employee.id) {
                        ordersList.push(order)
                    }
                } 
                window.alert(`${employee.name} sold ${ordersList.length} products`)
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += 
        `<li
        data-type="employee"
        data-employee-id="${employee.id}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

