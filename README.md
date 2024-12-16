Generate Karen Text - Story 1
URL

/ipsum

Method:

GET

URL Params

Optional Parameters:

paragraphs (int): Number of paragraphs to generate (default: 3).
mood (string): Karen mood, e.g., "passive-aggressive," "polite," or "manager-mode" (default: "polite").
Example:

/ipsum?paragraphs=2&mood=manager-mode

Success Response:

Code: 200 OK

Content:

json
Copy code
{
  "message": "Successfully generated Karen-inspired text",
  "data": {
      "paragraphs": 2,
      "mood": "manager-mode",
      "text": [
          "I'm not trying to cause a scene, but I need to speak to someone in charge immediately.",
          "It's unacceptable that this kind of service is allowed to continue in this establishment."
      ]
  }
}
Error Response:

Code: 400 BAD REQUEST
Content: {"message": "Invalid mood or parameter", "data": {}}

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": {}}

Add New Karen Mood - Story 2
URL

/moods

Method:

POST

Request Body:

json
Copy code
{
    "name": "condescending",
    "examples": [
        "Oh, I didn’t realize you were *trying* to help.",
        "Bless your heart, you’re doing your best, aren’t you?"
    ]
}
Success Response:

Code: 201 Created

Content:

json
Copy code
{
  "message": "Successfully added new Karen mood",
  "data": {
      "moodId": 4,
      "name": "condescending"
  }
}
Error Response:

Code: 400 BAD REQUEST
Content: {"message": "Invalid data", "data": {}}

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": {}}

Get All Karen Moods - Story 3
URL

/moods

Method:

GET

URL Params

None

Example:

/moods

Success Response:

Code: 200 OK

Content:

json
Copy code
{
  "message": "Successfully retrieved all Karen moods",
  "data": [
      {
          "moodId": 1,
          "name": "passive-aggressive"
      },
      {
          "moodId": 2,
          "name": "polite"
      },
      {
          "moodId": 3,
          "name": "manager-mode"
      }
  ]
}
Error Response:

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": []}
Get Mood Details - Story 4
URL

/moods/:moodId

Method:

GET

URL Params

moodId (int): ID of the Karen mood.
Example:

/moods/1

Success Response:

Code: 200 OK

Content:

json
Copy code
{
  "message": "Successfully retrieved mood details",
  "data": {
      "moodId": 1,
      "name": "passive-aggressive",
      "examples": [
          "Oh, it's fine. I’ll just wait over here indefinitely.",
          "No, no, take your time. It’s not like I’m in a hurry or anything."
      ]
  }
}
Error Response:

Code: 400 BAD REQUEST
Content: {"message": "Invalid mood ID", "data": {}}

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": {}}

Get Example Text for a Mood - Story 5
URL

/examples/:moodId

Method:

GET

URL Params

moodId (int): ID of the Karen mood.
Example:

/examples/2

Success Response:

Code: 200 OK

Content:

json
Copy code
{
  "message": "Successfully retrieved example text",
  "data": [
      "Excuse me, I just have a quick question for you.",
      "I really appreciate all that you're doing, but I have some concerns."
  ]
}
Error Response:

Code: 400 BAD REQUEST
Content: {"message": "Invalid mood ID", "data": {}}

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": {}}