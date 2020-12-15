# saarthi
Front End Task Submission for Saarthi

![Filled Form Image](https://github.com/girijakar/saarthi/blob/main/img/screenshots/frontpage.png)

On Clicking the Button New Employee? A form pops up and it asks for the required details which is to be submitted.

![Filled Form Image](https://github.com/girijakar/saarthi/blob/main/img/screenshots/form.png)

The submit button submits the details and the clear button resets the form.

![Filled Form Image](https://github.com/girijakar/saarthi/blob/main/img/screenshots/filledform.png)

After submitting the form. The data gets reflected in the table below and a delete button also appears.

![Filled Form Image](https://github.com/girijakar/saarthi/blob/main/img/screenshots/submitted.png)

LOGIC:-

On Clicking the button New Employee, the modal with id=”exampleModal” gets triggered. The modal contains all the required fields and it throws an error message if any field is left blank. Also on clicking the clear, one can reset the form which calls myFunction().

After Submitting, empty() function gets called from app.js to check whether all the fields are filled or not. If all are correct then addemployee() gets called and it retrieves the data entered in the fields by accessing the data through their id. After inserting the rows, a delete button gets added and which calls deleterow() function on clicking, deleterow function deletes the row.
