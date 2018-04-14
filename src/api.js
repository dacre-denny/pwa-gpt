/**
 * Returns all questions for speicifed age
 * @param {*} age
 */
export const getQuestions = age => {
  if (age === undefined) return;

  switch (age) {
    case "teenager": {
      return [
        {
          image: "/img/teen-lie.jpg",
          text: "Have you ever told a lie?",
          guilty: false,
          verses: ["John 1:1 in the beginning was the Word"]
        },
        {
          image: "/img/teen-theft.jpg",
          text: "Have you ever stolen anything?",
          guilty: true,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        },
        {
          image: "/img/teen-lust.jpg",
          text: "Have you looked at someone with lust?",
          guilty: false,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        },
        {
          image: "/img/teen-hate.jpg",
          text: "Have you ever felt anger or hatred towards someone?",
          guilty: true,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        }
      ];
    }
    case "adult": {
      return [
        {
          image: "/img/adult-lie.jpg",
          text: "Have you ever told a lie?",
          guilty: false,
          verses: ["John 1:1 in the beginning was the Word"]
        },
        {
          image: "/img/adult-theft.jpg",
          text: "Have you ever stolen anything?",
          guilty: true,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        },
        {
          image: "/img/adult-lust.jpg",
          text: "Have you looked at someone with lust?",
          guilty: false,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        },
        {
          image: "/img/adult-hate.jpg",
          text: "Have you ever felt anger or hatred towards someone?",
          guilty: true,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        }
      ];
    }
    default:
    case "child": {
      return [
        {
          image: "/img/child-lie.jpg",
          text: "Have you ever told a lie?",
          guilty: false,
          verses: ["John 1:1 in the beginning was the Word"]
        },
        {
          image: "/img/child-stealing.jpg",
          text: "Have you ever stolen anything?",
          guilty: true,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        },
        {
          image: "/img/child-discipline.jpg",
          text: "Have you disobeyed your parents?",
          guilty: false,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        },
        {
          image: "/img/child-angry.jpg",
          text: "Have you ever felt anger or hatred towards someone?",
          guilty: true,
          verses: [
            "John 1:1 in the beginning was the Word",
            "John 1:1 in the beginning was the Word"
          ]
        }
      ];
    }
  }
};

/**
 * Returns all follow up records
 */
export const getFollowUps = () => {
  const followUps = JSON.parse(localStorage.getItem("follow_ups") || "[]");

  if (Array.isArray(followUps)) {
    return followUps;
  } else {
    return [];
  }
};

/**
 * Inserts a follow up record
 * @param {*} name
 * @param {*} contact
 */
export const addFollowUp = (name, contact) => {
  if (name === undefined || contact === undefined) return;

  const followUps = getFollowUps();

  const followUp = {
    id: Date.now(),
    date: new Date().toDateString(),
    name: name,
    contact: contact
  };

  followUps.splice(0, 0, followUp);

  localStorage.setItem("follow_ups", JSON.stringify(followUps));
};

/**
 * Removes a follow up record by id
 * @param {*} id
 */
export const removeFollowUp = id => {
  if (id === undefined) return;

  const followUps = getFollowUps().filter(item => item.id !== id);

  localStorage.setItem("follow_ups", JSON.stringify(followUps));
};
