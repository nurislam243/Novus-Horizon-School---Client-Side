import React from 'react'
import AdmissionHero from './AdmissionHero/AdmissionHero'
import AdmissionProcess from './AdmissionProcess/AdmissionProcess'
import AdmissionRequirements from './AdmissionRequirements/AdmissionRequirements'
import AdmissionForm from './AdmissionForm/AdmissionForm'

const Admissions = () => {
  return (
    <div>
        <AdmissionHero></AdmissionHero>
        <AdmissionProcess></AdmissionProcess>
        <AdmissionRequirements></AdmissionRequirements>
        <AdmissionForm></AdmissionForm>
    </div>
  )
}

export default Admissions