
import {render, screen } from '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Welcome from './../components/Welcome'

describe('welcome component',()=>{
    it("dovrebbe montare correttamente",()=>{
    render (<Welcome/>)
expect(screen.getByText("Benvenuti in EpiBooks!")).toBeInTheDocument();})
    })