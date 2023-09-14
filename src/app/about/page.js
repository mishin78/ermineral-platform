import Manual from '../manual';


export default function Instruction( { searchParams } ) {
    console.log(searchParams)

    return (
        <div className='instructionBox'>
            <h1>{searchParams.name}</h1>
            <Manual />
        </div>
    )
}