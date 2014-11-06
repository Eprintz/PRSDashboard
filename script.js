$(document).ready(function () {
//Variable Declaration
    var username = "Login";
    var date = new Date();
        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        $("#date").append(monthNames[date.getMonth()]+" "+date.getDay()+" "+date.getFullYear());
    var usergrade = 9;
    var daytype = "odd";
    var dayevents = "none";
    var p1name = "Math";
    var p2name = "Spanish";
    var p3name = "English";
    var p4name = "History";
    var p5name = "SL/Clubs";
    var p6name = "PE";
    var p7name = "Design";
    var p8name = "Biology";
    
    var p1color = "orange";
    var p2color = "red";
    var p3color = "green";
    var p4color = "purple";
    var p5color = "teal";
    var p6color = "grey";
    var p7color = "brown";
    var p8color = "darkblue";
//Applying Variables
    $("#t1").append(p1name);
    $("#t2").append(p2name);
    $("#t3").append(p3name);
    $("#t4").append(p4name);
    $("#t5").append(p5name);
    $("#t6").append(p6name);
    $("#t7").append(p7name);
    $("#t8").append(p8name);
     function redotopbar(){   
        $("#ch1").css("background-color",p1color);
        $("#ch2").css("background-color",p2color);
        $("#ch3").css("background-color",p3color);
        $("#ch4").css("background-color",p4color);
        $("#ch5").css("background-color",p5color);
        $("#ch6").css("background-color",p6color);
        $("#ch7").css("background-color",p7color);
        $("#ch8").css("background-color",p8color);

        $("#period1").css("background-color",p1color);
        $("#period2").css("background-color",p2color);
        $("#period3").css("background-color",p3color);
        $("#period4").css("background-color",p4color);
        $("#period5").css("background-color",p5color);
        $("#period6").css("background-color",p6color);
        $("#period7").css("background-color",p7color);
        $("#period8").css("background-color",p8color);

         //14.286% per hour 0.238% per minute
        $("#period1").css("width","20.238%");
        $("#period1").css("margin-right","1.19%");
        $("#period2").css("width","20.238%");
        $("#period2").css("margin-right","1.19%");
        $("#period3").css("width","21.42%");
        $("#period3").css("margin-right","14.28%");
        $("#period4").css("width","21.42%");
        $("#period4").css("margin-right","14.28%");
        $("#period5").css("width","20.238%");
        $("#period5").css("margin-right","1.19%");
        $("#period6").css("width","20.238%");
        $("#period6").css("margin-right","1.19%");
        $("#period7").css("width","21.42%");
        $("#period8").css("width","21.42%");
     }
    if(daytype=="odd"){
        redotopbar();
        $("#period2").css("display","none");
        $("#period4").css("display","none");
        $("#period6").css("display","none");
        $("#period8").css("display","none");
        
        $("#class2").css("opacity","0.3");
        $("#class4").css("opacity","0.3");
        $("#class6").css("opacity","0.3");
        $("#class8").css("opacity","0.3");
    }
    else if(daytype=="even"){
        redotopbar();
        $("#period1").css("display","none");
        $("#period3").css("display","none");
        $("#period5").css("display","none");
        $("#period7").css("display","none");
        
        $("#class1").css("opacity","0.3");
        $("#class3").css("opacity","0.3");
        $("#class5").css("opacity","0.3");
        $("#class7").css("opacity","0.3");
    }
//Loading Effects
    
//Overall Webpage Buttons On Click
var appoverlayactive = 0;
    $("#app").click(function(){
        if(appoverlayactive == 0){
            $("#appoverlay").css("display","block");
            $("#appoverlay").animate({opacity:'1'}, "300","easeInOutCubic");
            appoverlayactive+=1;
        }
        else{
            $("#appoverlay").animate({opacity:'0'}, "300","easeInOutCubic");
            setTimeout(function(){
                $("#appoverlay").css("display","none");
            }, 300);
            
            appoverlayactive -=1;
        }
    });
var settingsbaractive = 0;
    $("#settings").click(function(){
        if(settingsbaractive == 0){
            $("#settingsbar").css("display","block");
            $("#body").animate({marginRight:'240px'}, "300","easeInOutCubic");
            $("#settingsbar").animate({opacity:'1'}, "300","easeInOutCubic");
            $("#settings").animate({marginRight:'240px'}, "100","easeInOutCubic");
            settingsbaractive+=1;
        }
        else{
            $("#body").animate({marginRight:'0px'}, "300","easeInOutCubic");
            $("#settingsbar").animate({opacity:'0'}, "300","easeInOutCubic");
            $("#settings").animate({marginRight:'0px'}, "100","easeInOutCubic");
            setTimeout(function(){
                $("#settingsbar").css("display","none");
            }, 300);
            settingsbaractive -=1;
        }
    });
//App creation
var tasksactive = 0;
$("#al1").click(function(){
    $("body").append
    ("<div class='app'id='tasks'><div id='taskstitle'>Tasks</div><div id='createdtasks'></div><div id='newtask'>Create New Task<img src='Pictures/plus32.png'></div></div>");
    if(tasksactive==0){
        $( "#tasks" ).animate({opacity: 0.95}, 500,"easeInOutCubic");
        $("#tasks").css("display","inline-block");
        $("#al1 img").css("transform","rotate(315deg)");
        tasksactive=1;
    }
    else if(tasksactive==1){
        $( "#tasks" ).animate({opacity: 0}, 500,"easeInOutCubic");
        setTimeout(function(){
                $("#tasks").css("display","none");
            }, 500);
        $("#al1 img").css("transform","rotate(0deg)");
        tasksactive=0;
    }   
});
var calcactive = 0;
$("#al2").click(function(){
    $("body").append("<div class='app'id='calculator'><div id='result'>93</div><div class='calcbutton'id='calcpowers'>x <sup>y</sup></div><div class='calcbutton'id='calcsqrt'>&radic;<span>&nbsp;&nbsp;</span></sup></div><div class='calcbutton'id='modulo'>%</div><div class='calcbutton'id='clear'>C</div><div class='calcnumber'id='num1'>1</div><div class='calcnumber'id='num2'>2</div><div class='calcnumber'id='num3'>3</div><div class='calcbutton'id='divide'>&divide;</div><div class='calcnumber'id='num4'>4</div><div class='calcnumber'id='num5'>5</div><div class='calcnumber'id='num6'>6</div><div class='calcbutton'id='multiply'>*</div><div class='calcnumber'id='num7'>7</div><div class='calcnumber'id='num8'>8</div><div class='calcnumber'id='num9'>9</div><div class='calcbutton'id='subtract'>-</div><div class='calcbutton'id='negative'>-x</div><div class='calcnumber'id='num0'>0</div><div class='calcbutton'id='point'>.</div><div class='calcbutton'id='equals'>=</div></div>");
    if(calcactive==0){
        $( "#calculator" ).animate({opacity: 0.95}, 500),"easeInOutCubic";
        $("#calculator").css("display","inline-block");
        $("#al2 img").css("transform","rotate(315deg)");
        calcactive=1;
    }
    else if(calcactive==1){
        $( "#calculator" ).animate({opacity: 0}, 500),"easeInOutCubic";
        setTimeout(function(){
                $("#calculator").css("display","none");
            }, 500);
        $("#al2 img").css("transform","rotate(0deg)");
        calcactive=0;
    }   
});
//Creates tasks upon task add button click
    var createdtasks = 0;
    $("#newtask").click(function(){
        $("#createdtasks").append
            ("<div class='task'><div class='color'id='c1'></div><textarea class='taskname'placeholder='Task Title'></textarea></div>");
        createdtasks+=1;
        if(createdtasks==7){
            $("#createdtasks").css("overflow-y","scroll");
        }
    });
//Calculator Code
    var calcnumber = 0;
    var activenumber = 0;
        function getcalcnumber(){
            $("#num1").click(function(){
                calcnumber=1;
            });
            $("#num2").click(function(){
                calcnumber=2;
            });
            $("#num3").click(function(){
                calcnumber=3;
            });
            $("#num4").click(function(){
                calcnumber=4;
            });
            $("#num5").click(function(){
                calcnumber=5;
            });
            $("#num6").click(function(){
                calcnumber=6;
            });
            $("#num7").click(function(){
                calcnumber=7;
            });
            $("#num8").click(function(){
                calcnumber=8;
            });
            $("#num9").click(function(){
                calcnumber=9;
            });
            $("#num0").click(function(){
                calcnumber=0;
            });
            $("#calcresult").html(calcnumber);
        }
        getcalcnumber();
    var calcoperation = "none";
        function calculate(){
            $("#calcresult").html(calcnumber);
            $("#calcoperation").html("");
        }
    calculate();
        $("#clear").click(function(){
            getcalcnumber();
        });
        $("#divide").click(function(){
            getcalcnumber();
        });
});