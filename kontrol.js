client.on('guildMemberAdd', async (member) => {
  const tag = ""
  const roleID = ""

  if (member.user.username.includes(tag)) {
    await member.roles.add(roleID);
    await member.roles.add(roleID);
  }
});

////////////////////////////////////////////////////

client.on('guildMemberAdd', async (member) => {
  const tag = ""
  const roleID = ""

  if (member.user.discriminator.includes(tag)) {
    await member.roles.add(roleID);
    await member.roles.add(roleID);
  }
});
