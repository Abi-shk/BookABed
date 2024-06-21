import React from 'react';

function Icons() {
  const items = [
    { id: 1, content: 'Item 1', image: 'https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?t=st=1718874196~exp=1718877796~hmac=156862384d11d74e8b477e49964fd11101bca98ea8f6d7dc3faf00a6c0477607&w=1380' },
    { id: 2, content: 'Item 2', image: 'https://img.freepik.com/free-vector/boy-with-empty-board_1308-82417.jpg?t=st=1718874351~exp=1718877951~hmac=4272634132c768b5daa8d58f79daf51df6aa6b92f8817124c18d75412e315046&w=740' },
    { id: 3, content: 'Item 3', image: 'https://img.freepik.com/free-photo/funny-3d-cartoon-casual-character_183364-80223.jpg?t=st=1718874922~exp=1718878522~hmac=f5f66bb5f925e959119c15ba9035691a97cd188ba2b2e531d68bc098031b6182&w=1380' },
    { id: 4, content: 'Item 4', image: 'https://img.freepik.com/free-vector/cartoon-character-girls-playing-seesaw-white-background_1308-53977.jpg?t=st=1718874800~exp=1718878400~hmac=aeca6bc2970e2f8314499ae623fb0a1548c9b74e77839800510546f758f686bb&w=1480' },
    { id: 5, content: 'Item 5', image: 'https://img.freepik.com/premium-vector/cat-playing-drums_444196-30454.jpg?w=996' },
  ];

  return (
    <div className="w-full p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center ">
        {items.map((item) => (
          <div key={item.id} className="bg-transparent overflow-hidden ">
            <img src={item.image} alt={item.content} className="object-contain w-full h-80" />
            <div className="p-4 backdrop-brightness-50 rounded-full">
              <h2 className="text-lg font-bold mb-0">{item.content}</h2>
              <p className="text-white mb-2 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, sunt, dolorum doloribus commodi necessitatibus voluptate fuga rerum </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icons;
