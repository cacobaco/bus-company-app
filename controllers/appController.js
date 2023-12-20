import Pass from "../models/pass.js";
import Schedule from "../models/schedule.js";
import Payment from "../models/payment.js";

export const getCron = (req, res) => {};

export const getMyPass = (req, res) => {
    Pass.findById(req.user.pass)
        .then((pass) => {
            let renewDate = null;

            if (pass) {
                renewDate = new Date(pass.expiresAt);

                if (renewDate.getUTCMonth() == 11) {
                    renewDate.setUTCMonth(0, 31);
                    renewDate.setUTCFullYear(renewDate.getUTCFullYear() + 1);
                } else {
                    renewDate.setUTCMonth(renewDate.getUTCMonth() + 2);
                    renewDate.setUTCDate(0);
                }
            }

            return res.render("omeupasse.ejs", {
                user: req.user,
                pass: pass,
                renewDate: renewDate,
            });
        })
        .catch((err) => {
            console.log(err);
            return res.render("omeupasse.ejs", { error: err.message });
        });
};

export const getSchedules = (req, res) => {
    Schedule.find({})
        .then((schedules) => {
            const nowDate = new Date();

            schedules.forEach((schedule) => {
                schedule.date.setFullYear(nowDate.getFullYear());
                schedule.date.setMonth(nowDate.getMonth());
                schedule.date.setDate(nowDate.getDate());
                schedule.timeLeft = getTimeLeft(schedule.date);
            });

            schedules = schedules.filter((schedule) => {
                return schedule.date >= nowDate;
            });

            schedules.sort((a, b) => {
                return a.date - b.date;
            });

            return res.render("horarios.ejs", {
                schedules: schedules,
            });
        })
        .catch((err) => {
            console.log(err);
            return res.render("horarios.ejs", { error: err.message });
        });
};

export const getManage = (req, res) => {
    return res.render("gerir.ejs", { user: req.user });
};

export const getPayments = (req, res) => {
    req.user
        .populate("payments")
        .then((user) => {
            console.log(user);

            return res.render("historicoPagamentos.ejs", {
                payments: user.payments,
            });
        })
        .catch((err) => {
            return res.render("historicoPagamentos.ejs", {
                error: err.message,
            });
        });
};

export const createPayment = (req, res) => {
    Pass.findById(req.user.pass)
        .then((pass) => {
            const payment = new Payment({
                user: req.user._id,
                method: req.body.option,
                price: pass.price,
            });

            payment
                .save()
                .then((payment) => {
                    req.user.payments.push(payment._id);
                    req.user
                        .save()
                        .then((user) => {
                            const newDate = new Date(pass.expiresAt);
                            if (newDate.getUTCMonth() == 11) {
                                newDate.setUTCMonth(0, 31);
                                newDate.setUTCFullYear(
                                    newDate.getUTCFullYear() + 1
                                );
                            } else {
                                newDate.setUTCMonth(newDate.getUTCMonth() + 2);
                                newDate.setUTCDate(0);
                            }
                            pass.expiresAt = newDate.getTime();

                            pass.save()
                                .then((pass) => {
                                    console.log({
                                        user: user,
                                        pass: pass,
                                        payment: payment,
                                    });
                                    return res.redirect("/omeupasse");
                                })
                                .catch((err) => {
                                    console.log(err);
                                    return res.redirect("/omeupasse");
                                });
                        })
                        .catch((err) => {
                            console.log(err);
                            return res.redirect("/omeupasse");
                        });
                })
                .catch((err) => {
                    console.log(err);
                    return res.redirect("/omeupasse");
                });
        })
        .catch((err) => {
            console.log(err);
            return res.redirect("/omeupasse");
        });
};

export const getCareers = (req, res) => {
    Schedule.find({})
        .then((schedules) => {
            return res.render("gerirCarreiras.ejs", {
                schedules: schedules,
            });
        })
        .catch((err) => {
            return res.render("gerirCarreiras.ejs", { error: err.message });
        });
};

export const createCareer = (req, res) => {
    const date = new Date();
    date.setHours(req.body.horaCarreira.split(":")[0]);
    date.setMinutes(req.body.horaCarreira.split(":")[1]);
    date.setSeconds(0);

    const newSchedule = new Schedule({
        career: req.body.numeroCarreira,
        origin: req.body.origemCarreira,
        destination: req.body.destinoCarreira,
        date: date.getTime(),
    });

    newSchedule
        .save()
        .then((schedule) => {
            console.log(schedule);
            return res.redirect("/carreiras");
        })
        .catch((err) => {
            console.log(err);
            return res.redirect("/carreiras");
        });
};

export const deleteCareer = (req, res) => {
    Schedule.findByIdAndDelete(req.body.numeroCarreira)
        .then((schedule) => {
            return res.redirect("/carreiras");
        })
        .catch((err) => {
            console.log(err);
            return res.redirect("/carreiras");
        });
};

export const getNews = (req, res) => {
    return res.render("gerirNovidades.ejs");
};

export const getPasses = (req, res) => {
    return res.render("gerirPasse.ejs");
};

const getTimeLeft = (date) => {
    const nowDate = new Date();
    const total = date - nowDate;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    // const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return hours + "h, " + minutes + "m e " + seconds + "s";
};
