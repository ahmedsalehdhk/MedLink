import React from 'react'

const NewPatientForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        // form data
        const name = e.target.name.value
        const age = e.target.age.value
        const gender = e.target.gender.value
        const contact = e.target.contact.value
        const address = e.target.address.value
        const cancerType = e.target.cancerType.value
        const diagnosisDate = e.target.diagnosisDate.value
        const latestMedication = e.target.latestMedication.value
        const dateOfLatestMedication = e.target.dateOfLatestMedication.value
        const status = e.target.status.value
        
        const patient = { name, age, gender, contact, address, cancerType, diagnosisDate, latestMedication, dateOfLatestMedication, status };

        // POST request
        const response = await fetch("http://localhost:4000/api/patients", {
            method: "POST",
            body: JSON.stringify(patient),
            headers: { "Content-Type": "application/json" },
            });
        // const json = await response.json();
    }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3' id='newPatientForm'>
        <div className='flex flex-col'>
            <label htmlFor="">Full Name</label>
            <input type="text" name='name' />
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Age</label>
            <input type="number" name='age' />
        </div>
        <div className="flex gap-4">
            <div className="">
                <input type="radio" name="gender" value="male" className='mr-1'/>
                <label htmlFor="">Male</label>
            </div>
            <div className="">
                <input type="radio" name="gender" value="female" className='mr-1'/>
                <label htmlFor="">Female</label>
            </div>
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Contact</label>
            <input type="number" name='contact' />
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <input type="text" name='address' />
        </div>
        <h1>Type of Cancer:</h1>
        <div className="flex gap-4">
            <div className="">
                <input type="radio" name="cancerType" value="Breast" className='mr-1'/>
                <label htmlFor="">Breast</label>
            </div>
            <div className="">
                <input type="radio" name="cancerType" value="Colon" className='mr-1'/>
                <label htmlFor="">Colon</label>
            </div>
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Diagnosis Date</label>
            <input type="date" name='diagnosisDate' />
        </div>
        <label htmlFor="">Latest Medication:</label>
        <div className="flex gap-4">
            <div className="">
                <input type="radio" name="latestMedication" value="Chemotherapy" className='mr-1'/>
                <label htmlFor="">Chemotherapy</label>
            </div>
            <div className="">
                <input type="radio" name="latestMedication" value="Radiotherapy" className='mr-1'/>
                <label htmlFor="">Radiotherapy</label>
            </div>
        </div>
        <div className="flex flex-col">
            <label htmlFor="">Latest Medication Date</label>
            <input type="date" name='dateOfLatestMedication' />
        </div>
        <h1>Patient Status:</h1>
        <div className="flex gap-4">
            <div className="">
                <input type="radio" name="status" value="Alive" className='mr-1'/>
                <label htmlFor="">Alive</label>
            </div>
            <div className="">
                <input type="radio" name="status" value="Dead" className='mr-1'/>
                <label htmlFor="">Dead</label>
            </div>
        </div>
        <input type="submit" className='bg-green-500 font-medium text-white cursor-pointer' />
    </form>
  )
}

export default NewPatientForm
