function run1()
{
document.form.result.value+="1";
}
function run2()
{
document.form.result.value+="2";
}
function run3()
{
document.form.result.value+="3";
}
function run4()
{
document.form.result.value+="4";
}
function run5()
{
document.form.result.value+="5";
}
function run6()
{
document.form.result.value+="6";
}
function run7()
{
document.form.result.value+="7";
}
function run8()
{
document.form.result.value+="8";
}
function run9()
{
document.form.result.value+="9";
}
function run0()
{
document.form.result.value+="0";
}
function rundeci()
{
document.form.result.value+=".";
}
function runplus()
{
document.form.result.value+="+";
}
function runminus()
{
document.form.result.value+="-";
}
function rundivide()
{
document.form.result.value+="/";
}
function runmulti()
{
document.form.result.value+="*";
}
function runmod()
{
document.form.result.value+="%";
}
function runresult()
{
var finalResult = eval(document.form.result.value);
document.form.result.value = finalResult;
}
function runclear()
{
document.form.result.value = "";
}
