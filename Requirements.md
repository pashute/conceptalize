# Conceptalize Requirements

## 1. Description

See README.md for the program description.

## 2. Conceptalize Evolving Analysis
2.1 There is a main determination process, which shows the certainty percentage of each of the aspects of the user's requests and of the Conceptalize response:
- Type: Command, Requirement (which is part of a command), Info, Question
- Feeling: Formal, Other (for future use)
- Resolved:  Percentage
- Summary:  Main actions, topics and concepts. 

1. Evolving analysis:  Each unknown concept initiates a quest for related actions, topics and concepts critical for understanding the request and responding adequately. 

3. Smart Parsing: Conceptalize analyzes the request and its response on two levels:
   - semantics - basic literal level
   - contextual level - in-depth understanding.

4. **Overall states:**
There is an "overall" object that holds the current states of the analysis, and determines how the program responds to the requests. 
   
4.1 **Detection:** During analysis, and in parallel to everything else, the Conceptalize analysis determines what kind of reaction is needed, by detecting the overall states and context of the request as follows:
   - **Request type** (Command, Info, Question, Response),
   - **Response type** (Action, Response, Info, Summary)
   - **Urgency** (Urgent, Fast, Deep),
   - **Main concepts: (Actions, Topics):** The main concepts of the request and response.   
     
4.2 **Overall-State Certainty:** Each state has all the possiblilities each with its certainty percentege that totals to 100%.     
For example: The Request Type state could have the following certainty values:  
Request type:  Command: 85%, Info: 5%, Question 0%, Response 0% 

4.3  Notification of Overall State change: When the certainty of a state is changed, the state object sends a notification about a change, and accordingly the other analysis processes either restart or adjust themselves.  

5. Analysis results: The analysis results are a set of connected graphs of concepts. Important concepts are marked as Topics or Actions. 

5.1. **Concept connections:** 
5.1.1 **Importance level:** Each connection has a 0 to 5 level of importance.
5.1.2 **Concept group:** Every connection has a concept group, that groups the concepts into: 
- Composite actions
- Sequences
- Concept dependencies
- Association maps

5.1.3 **Weighted connections** have a type of connection, for example Thesaurus.
  
5. Concept levels: Each node has the following levels:
   - importance (-1 avoid, 0 ignore, 1 ok, 2 nice, 3 good, 4 important, 5 critical)
   - knowledge (0 - none, 1 - some, 2 - basic, 3 good, 4 - broad, 5 - expert}

6. **Conceptalize Links:** Each node can have Conceptalize links.
This is a link to somewhere on the conceptalize website with different kinds of information: 
a. a summary of knowledge,
b. a compilation of nodes,
c. a program that can run a sequence of actions on a computer.
f. s program that could interact with a website using a conceptalize map, created by interaction with the user, the conceptalize program, and websites.

## The conceptalize analysis:  
The conceptalize discussion creates up to seven node maps for the simple and broader understanding of the task at hand.  
1. Literal request
2. Requested topic
3. Related topic 1 
4. Background and feelings
5. Related topic 2
6. Related topic 3
7. Related topic 4
   
Every interaction with a quest (usually initiated by the user in a chat-like discussion) has two phases:  Understanding the request. An interactive phase in which feedback is given to verify the direction in which Conceptalize is going with the request, to rule out irrelevant directions, and to focus and 

## UI Layout

The application should have the following layout:

1. **Main Structure**:
   - Thin control strip at the top of the screen
   - Thin status strip at the bottom
   - Three-column layout taking up the remaining screen space

2. **Column Structure**:
   - Each column has its own thin control strip at the top
   - Columns should be of equal width
   - Columns should be responsive and adjust width based on screen size
   - The middle column view (Analysis) has two tabs, one for the request analysis and one for the response analysis.

3. **Technical Requirements**:
   - Use modern JavaScript/TypeScript
   - Responsive design
   - Clean, minimal UI
   - GitFlow workflow for version control
   - Well-documented codebase

The top control strip has the name Conceptalize and in a smaller font a non automatic version number, starting with v0.100

The views in the main column can be hidden or shown from the control strip  with three eye icons and the name of each column. These toggle the visibility of the column, and change accordingly to eye-slash icons when the column is hidden. 

When a column is hidden, the column to its right takes its place and spans the rest of the screen. 

When the column on the right (Concepts) is hidden, the column on its left (Analysis) spans the rest of the screen. 

If only one view is visible, it spans the entire width of the screen. 
