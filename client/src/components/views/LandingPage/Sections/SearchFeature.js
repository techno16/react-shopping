import React, {useState} from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (e) => {
        setSearchTerm(e.currentTarget.value)
        props.refreshFunction(e.currentTarget.value)
    }

    return (
        <div>
            <Search 
                placeholder="검색어를 입력해주세요." 
                onChange={searchHandler}
                value={SearchTerm}
            />
        </div>
    )
}

export default SearchFeature
