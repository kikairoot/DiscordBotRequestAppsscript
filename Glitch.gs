var GLITCH_URL = "https://プロジェクトID.glitch.me";
function wakeGlitch(){
 var json = {
   'type':'wake'
 };
 sendGlitch(GLITCH_URL, json);
}
function sendGlitch(uri, json){
 var params = {
   'contentType' : 'application/json; charset=utf-8',
   'method' : 'post',
   'payload' : json,
   'muteHttpExceptions': true
 };
 response = UrlFetchApp.fetch(uri, params);
}

function sendMessageGlitch(){
 var json = {
   'type':'send' ,
   'channelId':'341103697176035339',
   'userId':'309507842807955456',
   'message':'本日は晴天なり'
 };
 sendGlitch(GLITCH_URL, json);
}
function sendDirectMessageGlitch(){
 var json = {
   'type':'sendDM' ,
   'userId':'309507842807955456',
   'message':'本日は晴天なり'
 };
 sendGlitch(GLITCH_URL, json);
}

function postData(){

  var json = {
   'type':'sendDM' ,
   'userId':'309507842807955456',
   'message':'本日は晴天なり'
  };
  sendGlitch(GLITCH_URL, json);
}
function getGuilds(){
 var json = {
   'type':'guilds' 
 };
 sendGlitch(GLITCH_URL, json);
}
function getGiledRole(){
 var json = {
   'type':'guildRole' ,
   'guildId':'341100652501532675'
 };
 sendGlitch(GLITCH_URL, json);
}
function getGiledRoleByName(){
 var json = {
   'type':'guildRole' ,
   'guildName':'グループ名'
 };
 sendGlitch(GLITCH_URL, json);
}
function getRoleMembers(){
 var json = {
   'type':'roleMembers' ,
   'guildId':'341100652501532675',
   'roleId':'994449318457131149'
 };
 sendGlitch(GLITCH_URL, json);
}
