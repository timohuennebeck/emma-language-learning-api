exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("first_name");
            table.string("last_name");
            table.string("image_url");
            table.string("email");
            table.enu("role", ["student", "teacher"]).notNullable();
        })
        .createTable("students", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("teachers", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("rate_per_hour");
            table.string("description");
        })
        .createTable("invitations", (table) => {
            table.increments("id").primary();
            table
                .integer("students_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("students")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .integer("teachers_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teachers")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.datetime("date_time").notNullable();
            table.enu("status", ["pending", "accepted", "declined"]).defaultTo("pending");
        })
        .createTable("lessons", (table) => {
            table.increments("id").primary();
            table
                .integer("students_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("students")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .integer("teachers_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teachers")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.enu("status", ["pending", "scheduled", "completed"]).defaultTo("pending");
            table.datetime("date_time").notNullable();
        })
        .createTable("reviews", (table) => {
            table.increments("id").primary();
            table
                .integer("lessons_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("lessons")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .integer("students_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("students")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .integer("teachers_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("teachers")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.integer("rating");
            table.text("message");
        })
        .createTable("live_videos", (table) => {
            table.increments("id");
            table
                .integer("lessons_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("lessons")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("session_id");
            table.datetime("start_time").notNullable();
            table.datetime("end_time").notNullable();
            table.string("link");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("live_videos")
        .dropTable("reviews")
        .dropTable("lessons")
        .dropTable("invitations")
        .dropTable("students")
        .dropTable("teachers")
        .dropTable("users");
};
