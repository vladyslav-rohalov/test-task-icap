<h1>Tech task</h1>

<h2>Website</h2>
<p>https://test-task-icap-xi.vercel.app/</p>

<p>To install locally</p>
<ul>
        <li>download the application using the command in your terminal:  gh repo clone vladyslav-rohalov/test-task-icap</li>
        <li>install packages with the command: npm install</li>
        <li>start the project in development mode: npm run dev</li>       
</ul>

<h3>Languages and Tools</h3>

<ul>
        <li>Nestjs - serverside React framework</li>
        <li>Material UI - styling</li>
        <li>AXIOS - CRUD operations</li>
        <li>Redux - global store</li>
        <li>TS - general language</li>
        <li>JS - used in the cursor comonent</li>
        <li>useHookForm - form data validation</li>
</ul>

<h3>Description</h3>
<p>Written in Nextjs using ts.</p>
 <ul>
        <li>Two pages login and person table</li>
        <li>Validation on the frontend was not applied, only specifying mandatory fields, instead used responses from the server to indicate errors </li>
        <li>Adding, editing and deleting, via modal windows</li>
        <li>For animation I took a ready-made liquid cursor, I did not have time to rewrite it on TS, it is drawn on canvas with z-index = 0</li>
        <li>When using pagination, page data is taken from url parameters. I rewrite the url parameters when changing them.</li>  
 </ul>
