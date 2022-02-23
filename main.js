function setup()
{
    canvas = createCanvas(630,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video ,0 ,0 ,630 ,300);
}