import { useState } from "react";

const Accordion = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  const accordionItems = [
    {
      id: 1,
      header: "Lorem  dolor sit amet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque recusandae non qui tempora dignissimos temporibus animi at voluptatem consectetur perspiciatis. Quisquam!",
    },
    {
      id: 2,
      header: "Lorem ipsum amet consectetur?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est excepturi ratione, similique fugiat, voluptas id nihil voluptates debitis quidem vel! Quaerat tenetur nihil numquam labore! Reiciendis quidem provident vero quia laboriosam esse architecto vel odio minus facilis, exercitationem nihil. Possimus eveniet quos perspiciatis aperiam.",
    },
    {
      id: 3,
      header: "Lorem ipsum dolor sit ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae sint ipsum fugit! Aliquid?",
    },
    {
      id: 4,
      header: "Lorem ipsum dolor sit amet consectetur ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ab ea ratione dolorem, nostrum molestias magnam quibusdam officiis quaerat, cupiditate aperiam delectus laboriosam quisquam? Praesentium quidem optio repudiandae, itaque velit sequi.",
    },
  ];

  return (
    <div className="accordion">
      {accordionItems.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleItem(item.id)}>
            {item.header}
          </div>
          {openItemId === item.id && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
