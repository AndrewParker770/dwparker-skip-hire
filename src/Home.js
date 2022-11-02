import React from 'react';

function Home() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum sunt veniam quos iure omnis magni magnam animi. Perspiciatis quaerat possimus corrupti illo voluptas eligendi unde saepe odio cumque ut?
      </p>
      <p>
        {process.env.REACT_APP_EXAMPLE}
      </p>
    </div>
  );
}

export default Home


