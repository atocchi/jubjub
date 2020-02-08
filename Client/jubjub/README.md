##Meme Repository##

1. This app uses an Express Back-end along with various middleware to allow file uploads and viewing of the last 10 images uploaded by users.
2. The Purpose of this app is to test DDNS functions and hosting off a Raspberry PI 3 from my own home. For this reason I am uploading the full react build to github, and then downloading it to the Pi so that if can be served there.
3. This app is purely experimental and I am using to test two issues. 
    --* Issues with Async and File uploading to multiple locations 
    >:foo.mv(uploads/) & foo.mv(uploads/bar)
    --* Serving files in a way that is accessible to users, but not bad actors
4. I plan on using this as a play ground for interactions between react and the back-end