let trainer = {
    doTeach: function () {

        let name = "Nag"; // moed to heap for closure callbacks before context destroy..

        try {
            console.log(name + ' teaching topic-1-start');
            setTimeout(function () {
                console.log(name + 'teaching topic-2 after timeout event');
                //if (1 === 1) throw new Error('hate topic-1');
            }, 5000);
            console.log('teaching topic-1-end');

        } catch (e) {
            console.log('i caught : ' + e.message);
        }

    }
};

trainer.doTeach();