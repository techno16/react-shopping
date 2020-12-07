import React from 'react';
import {Descriptions, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../../_actions/user_actions';

function ProductInfo(props) {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(addToCart(props.detail._id))
    }

    
    return (
        <div>
            <Descriptions title="상품 정보">
                <Descriptions.Item label="가격">{props.detail.price}$</Descriptions.Item>
                <Descriptions.Item label="판매수">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="조회수">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="상세설명">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br/>
            <br/>
            <br/>

            <div style={{display: 'flex', justifyContent: 'center'}}> 
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    구매하기
                </Button>
            </div>
        </div>


    )
}

export default ProductInfo
