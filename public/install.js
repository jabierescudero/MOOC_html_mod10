'use sctict';
let deferredInstallPrompt = null;
let installButton = undefined;
document.addEventListener("DOMContentLoaded", () => {
   installButton = document.getElementById('installButton');
   // installButton.addEventListener('click', installPWA);
});

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    // CODELAB: Add code to save event & show the install button.
    deferredInstallPrompt = evt;
    
    //installButton = document.getElementById('installButton');
    installButton.addEventListener('click', installPWA);

    installButton.removeAttribute('hidden');
  }

function installPWA(evt) {
    console.log('Aquiiiii');
    // CODELAB: Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribute('hidden', true);
    // CODELAB: Log user response to prompt.
    deferredInstallPrompt.userChoice
        .then((choice) => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt', choice);
          } else {
            console.log('User dismissed the A2HS prompt', choice);
          }
          deferredInstallPrompt = null;
        });
  }

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    // CODELAB: Add code to log the event
    console.log('Shooter game was installed.', evt);
  
  }