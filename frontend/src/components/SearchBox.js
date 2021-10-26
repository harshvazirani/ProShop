import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        }
        else{
            history.push('/')
        }
    }

    return (
        <>
        <Form>
            <Form.Control type='text' name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-5'></Form.Control>
        </Form>
        <Button type='button' variant='outline-success' className='p-2' onClick ={submitHandler}>
                    Search
        </Button>
        </>
    )
}

export default SearchBox
