function calculatePassingScore(player) {
  const yards = player.stats.passing.yards / 25
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3

  return yards + touchdowns + interceptions
}

function calculateRushingScore(player) {
  const yards = player.stats.rushing.yards / 10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3

  return yards + touchdowns + fumbles
}

function calculateReceivingScore(player) {
  const yards = player.stats.receiving.yards / 10
  const touchdowns = player.stats.receiving.touchdowns * 6
  const fumbles = player.stats.receiving.fumbles * -3
  const receptions = player.stats.receiving.receptions

  return yards + touchdowns + fumbles + receptions
}


function calculateReturnScore(player) {
  const kickyards = player.stats.return.kickreturn.yards / 15
  const kicktouchdowns = player.stats.return.kickreturn.touchdowns * 6
  const kickfumbles = player.stats.return.kickreturn.fumbles * -3

  const puntyards = player.stats.return.puntreturn.yards / 15
  const punttouchdowns = player.stats.return.puntreturn.touchdowns * 6
  const puntfumbles = player.stats.return.puntreturn.fumbles * -3

  return kickyards + kicktouchdowns + kickfumbles + puntyards + punttouchdowns + puntfumbles
}
function calculateScore(player) {
  switch (player.position) {
    case 'QB':
      return calculatePassingScore(player) + calculateRushingScore(player)

    case 'RB':
      return calculateRushingScore(player) + calculateReceivingScore(player) + calculateReturnScore(player)
    case 'WR':
      return calculateRushingScore(player) + calculateReceivingScore(player) + calculateReturnScore(player)

    case 'TE':
      return calculateReceivingScore(player)

    default:
      return 0
  }

}


module.exports = calculateScore


