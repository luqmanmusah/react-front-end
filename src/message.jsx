import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const GET_RANDOM_MSG_REQUEST = 'GET_RANDOM_MSG_REQUEST';
const GET_RANDOM_MSG_SUCCSESS = 'GET_RANDOM_MSG_SUCCSESS';

const getRandomMsgSuccess = (json) => ({
  type: GET_RANDOM_MSG_SUCCSESS,
  json,
});

// thunk
const getRandomMsg = () => (dispacth) => {
  dispacth({ type: GET_RANDOM_MSG_REQUEST });
  return fetch('http://[::1]:4000/api/v1/randomMessage.json')
    .then((response) => response.json())
    .then((json) => dispacth(getRandomMsgSuccess(json)));
};

const Message = (props) => {
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.msg);
  return (
    <div>
      <h2>
        The Message from props is
        {' '}
        {msg}
      </h2>
      <button type="button" className="getMessageBtn" onClick={() => dispatch(getRandomMsg())}> Get Random Message</button>
      <h2>
        The Message from store is
        {' '}
        {message.title}
        .
      </h2>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
