/**
 * Callback for rendering the homepage card.
 * @return {CardService.Card} The card to show to the user.
 */
function onHomepage(e) {
  console.log(e);
  var card = CardService.newCardBuilder();
  var peekHeader = CardService.newCardHeader()
    .setTitle('Addon for scheduling stream video call')
    .setSubtitle('more info at getstream.io');

  card.setPeekCardHeader(peekHeader);
  return card.build();
}
function createConference(arg) {
  const eventData = arg.eventData;
  const calendarId = eventData.calendarId;
  const eventId = eventData.eventId;

  // Retrieve the Calendar event information
  var calendarEvent;
  try {
    calendarEvent = Calendar.Events.get(calendarId, eventId);
  } catch (err) {
    // Event does not exist just yet; proceed with given event ID
    calendarEvent = {
      id: eventId,
    };
  }

  // Create a conference on our third-party service and return the
  // conference data or errors in a custom JSON object.
  var conferenceInfo = create3rdPartyConference(calendarEvent);

  // Build and return a ConferenceData object
  var dataBuilder = ConferenceDataService.newConferenceDataBuilder();

  if (!conferenceInfo.error) {
    // Build the ConferenceData object from the returned conference info.
    var conferenceTypeParameter = ConferenceDataService.newConferenceParameter()
      .setKey('conferenceSolutionType')
      .setValue('stream');

    dataBuilder
      .setConferenceId(conferenceInfo.id)
      .addConferenceParameter(conferenceTypeParameter);

    if (conferenceInfo.videoUri) {
      var videoEntryPoint = ConferenceDataService.newEntryPoint()
        .setEntryPointType(ConferenceDataService.EntryPointType.VIDEO)
        .setUri(conferenceInfo.videoUri);
      dataBuilder.addEntryPoint(videoEntryPoint);
    }
  } else {
    var error =
      ConferenceDataService.newConferenceError().setConferenceErrorType(
        ConferenceDataService.ConferenceErrorType.TEMPORARY
      );
    dataBuilder.setError(error);
  }

  // Build and return the ConferenceData object.
  return dataBuilder.build();
}

function create3rdPartyConference(calendarEvent) {
  var id = Math.floor(Math.random() * (99999999999 - 11111111111 + 1)) + min;
  var options = {
    method: 'POST',
    payload: `{}`,
  };
  var url = 'https://<link-to-my-video-app>/join/' + id;
  UrlFetchApp.fetch(url, options);
  var data = {};
  data.id = id;
  data.videoUri = url;
  return data;
}
